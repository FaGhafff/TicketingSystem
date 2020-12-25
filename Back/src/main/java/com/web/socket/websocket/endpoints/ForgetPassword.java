package com.web.socket.websocket.endpoints;


import com.web.socket.websocket.services.ForgetPassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/forgetPassword")
public class ForgetPassword {
    @Autowired
    ForgetPassService forgetPassService;

    @RequestMapping(value = "/new",method = RequestMethod.POST)
    public ResponseEntity<Object> requestForChangePass(@RequestParam("username") String username){
return forgetPassService.requestForChangePass(username);
    }

    @RequestMapping(value = "/validate",method = RequestMethod.GET)
    public ResponseEntity<Object> validate(@RequestParam("token")String token,
                                           @RequestParam("code") String code){
        return forgetPassService.validCode(token,null,code);
    }

    @RequestMapping(value = "/changePass",method = RequestMethod.POST)
    public ResponseEntity<Object> changePass(@RequestParam("username")String username,
                                             @RequestParam("password")String newPass){
        return forgetPassService.changePassword(null,username,newPass);
    }

}
