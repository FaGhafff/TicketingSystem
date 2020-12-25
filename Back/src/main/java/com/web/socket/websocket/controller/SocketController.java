package com.web.socket.websocket.controller;

import com.web.socket.websocket.bean.Message;
import com.web.socket.websocket.repositories.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SocketController {

    @Autowired
    private SimpMessagingTemplate template;

    @Autowired
    private MessageRepository repository;


    @MessageMapping("/user-all")
    @SendTo("/topic/user")
    public Message sendToAll(@Payload Message message) {
        return message;
    }


    @MessageMapping("/test")
    public List<Message> sendToAli(@Payload Message message) {
        template.convertAndSend("/queue/user/"+message.getDest(), message);
        repository.save(message);
//        return repository.findByName(message.getName());
    return null;
    }
}