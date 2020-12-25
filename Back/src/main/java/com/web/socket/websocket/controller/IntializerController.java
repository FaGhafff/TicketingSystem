package com.web.socket.websocket.controller;

import com.web.socket.websocket.bean.Message;
import com.web.socket.websocket.bean.Roles;
import com.web.socket.websocket.bean.UserPass;
import com.web.socket.websocket.repositories.MessageRepository;
import com.web.socket.websocket.repositories.UserPassRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController()
@RequestMapping("/init")
public class IntializerController {

    @Autowired
    MessageRepository repo;

    @Autowired
    UserPassRepo userPassRepo;

    @RequestMapping("/")
    public String initData() {
        UserPass fati = new UserPass("fati", "fatemeh2000", "09146633942", Roles.designer);
        UserPass ali = new UserPass("ali", "ali", "09145030651", Roles.backEnd);
        UserPass admin = new UserPass("admin", "admin", "09146633942", Roles.admin);
        UserPass front = new UserPass("front", "front", "09145030651", Roles.frontEnd);
        UserPass manager = new UserPass("manager", "manager", "09146633942", Roles.manager);
        userPassRepo.save(fati);
        userPassRepo.save(ali);
        userPassRepo.save(admin);
        userPassRepo.save(front);
        userPassRepo.save(manager);
        return "done";
    }


}
