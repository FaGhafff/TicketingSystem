package com.web.socket.websocket.services;

import com.web.socket.websocket.bean.UserPass;
import com.web.socket.websocket.repositories.UserPassRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Optional;

@Service
public class LoginService {

    @Autowired
    private UserPassRepo userPassRepository;


    public ResponseEntity<Object> login(String username, String password) {
        Optional<UserPass> founded = userPassRepository.findByUsername(username);
        HashMap<String, String> map =new HashMap<>();
        if (founded.isEmpty()) {
            map.put("status","false");
            map.put("message","not found");
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        UserPass userPass = founded.get();
        if (userPass.getPassword().equals(password)) {
            map.put("status","true");
            map.put("username",username);
            map.put("role",userPass.getRole().toString());
            return new ResponseEntity<>(map,HttpStatus.ACCEPTED);
        } else {
            map.put("status","false");
            map.put("message","wrong Password");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

}
