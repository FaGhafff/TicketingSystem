package com.web.socket.websocket.endpoints;

import com.web.socket.websocket.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
public class Login {

    @Autowired
    private LoginService loginService;

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public ResponseEntity<Object> login(@RequestParam("username") String username, @RequestParam("password") String password) {
        System.out.println(username +" "+password);
        return loginService.login(username,password);
    }



}
