package com.web.socket.websocket.services;

import com.web.socket.websocket.bean.ForgetPass;
import com.web.socket.websocket.bean.UserPass;
import com.web.socket.websocket.repositories.ForgetPassRepo;
import com.web.socket.websocket.repositories.UserPassRepo;
import com.web.socket.websocket.tools.SendSMS;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.Base64;
import java.util.HashMap;
import java.util.Optional;
import java.util.Random;

@Service
public class ForgetPassService {
    @Autowired
    private UserPassRepo userPassRepository;
    @Autowired
    private ForgetPassRepo forgetPasswordRepository;

    public ResponseEntity<Object> requestForChangePass(String username) {
        Optional<ForgetPass> oldRequests = forgetPasswordRepository.findAllByUsername(username);
        oldRequests.ifPresent(forgetPass -> forgetPasswordRepository.delete(forgetPass));
        HashMap<String, String> map = new HashMap<>();
        Optional<UserPass> user = userPassRepository.findByUsername(username);
        if (user.isEmpty()) {
            map.put("status", "false");
            map.put("message", "user not found");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
        ForgetPass newReq = getForgetPassword(username);
        String smsResponse = sendSMS(username,newReq.getCode());
        forgetPasswordRepository.save(newReq);
        map.put("status", "true");
        map.put("message", "request accepted");
        map.put("SmsResponse",smsResponse);
        map.put("token", newReq.getToken());
        return new ResponseEntity<>(map, HttpStatus.ACCEPTED);

    }

    //fixme username is not used in any place. clean this
    public ResponseEntity<Object> validCode(String token, String username, String code) {
        HashMap<String, String> map = new HashMap<>();
        Optional<ForgetPass> repo = forgetPasswordRepository.findByToken(token);
        if (repo.isEmpty()) {
            map.put("status", "false");
            map.put("message", "token does not exist");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
        ForgetPass forgetPassword = repo.get();
        if (forgetPassword.getToken().equals(token)) {
            if (forgetPassword.getCode().equals(code)) {
                forgetPassword.setValidate(true);
                forgetPasswordRepository.save(forgetPassword);
                map.put("status", "true");
                map.put("message", "the code was validated");
                return new ResponseEntity<>(map, HttpStatus.ACCEPTED);
            } else {
                map.put("status", "false");
                map.put("message", "code is wrong");
                return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
            }

        } else {
            map.put("status", "false");
            map.put("message", "token invalid");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);

        }
    }

    public ResponseEntity<Object> changePassword(String token, String username, String newPassword) {
        Optional<ForgetPass> optional = forgetPasswordRepository.findByUsername(username);
        HashMap<String, String> map = new HashMap<>();
        if (optional.isEmpty()) {
            map.put("message", "user not found !");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
        ForgetPass data = optional.get();

        if (data.isValidate()) {
            UserPass newPass = userPassRepository.findByUsername(username).get();
            newPass.setPassword(newPassword);
            userPassRepository.save(newPass);
            forgetPasswordRepository.delete(data);
            map.put("status", "true");
            map.put("message", "your password changed !");
            sendSMSPassword(username,newPassword);
            return new ResponseEntity<>(map, HttpStatus.ACCEPTED);
        } else {
            map.put("status", "false");
            map.put("message", "your code is not validated");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
    }

    private String getNewToken() {
        SecureRandom secureRandom = new SecureRandom(); //threadsafe
        Base64.Encoder base64Encoder = Base64.getUrlEncoder(); //threadsafe
        byte[] randomBytes = new byte[24];
        secureRandom.nextBytes(randomBytes);
        return base64Encoder.encodeToString(randomBytes);
    }

    private String getNewCode() {
        int sixDigit = new Random().nextInt(99999) + 100000;
        return String.valueOf(sixDigit);
    }

    private ForgetPass getForgetPassword(String username) {
        return new ForgetPass(username,getNewToken(),getNewCode(),false);
    }

    private String sendSMS(String username,String code){
        Optional<UserPass> optional = userPassRepository.findByUsername(username);
        if (optional.isEmpty())
            return "user not found";
        UserPass userPass =optional.get();
        SendSMS sendSMS = new SendSMS(userPass.getPhoneNumber());
        String smsText = "Your code is : "+code;
        sendSMS.setMessage(smsText);
        return sendSMS.send();
    }
    private String sendSMSPassword(String username,String password){
        Optional<UserPass> optional = userPassRepository.findByUsername(username);
        if (optional.isEmpty())
            return "user not found";
        UserPass userPass =optional.get();
        SendSMS sendSMS = new SendSMS(userPass.getPhoneNumber());
        String smsText = "Your new Password is : "+password;
        sendSMS.setMessage(smsText);
        return sendSMS.send();
    }

}
