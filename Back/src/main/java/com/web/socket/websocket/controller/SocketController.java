package main.java.com.web.socket.websocket.controller;

import main.java.com.web.socket.websocket.bean.MessageBean;
import main.java.com.web.socket.websocket.repositories.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class SocketController {

    @Autowired
    private SimpMessagingTemplate template;

    @Autowired
    private MessageRepository repository;


    @MessageMapping("/user-all")
    @SendTo("/topic/user")
    public MessageBean sendToAll(@Payload MessageBean message) {
        return message;
    }


    @MessageMapping("/test")
    public List<MessageBean> sendToAli(@Payload MessageBean message) {
        template.convertAndSend("/queue/user/"+message.getDest(), message);
        repository.save(message);
//        return repository.findByName(message.getName());
    return null;}


}
