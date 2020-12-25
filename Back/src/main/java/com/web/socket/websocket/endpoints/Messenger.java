package com.web.socket.websocket.endpoints;

import com.web.socket.websocket.bean.Message;
import com.web.socket.websocket.repositories.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

@RestController
@RequestMapping("/messanger")
public class Messenger {
    @Autowired
    private MessageRepository repo;

    @RequestMapping(value = "/getMessengerItems", method = RequestMethod.GET)
    public List<String> getMessengerItems(@RequestParam String role) {
        List<String> list = new ArrayList<>(Arrays.asList("admin", "developer", "analyzer", "frontEnd"));
        list.remove(role);
        return list;
    }

    @RequestMapping(value = "/myHistory", method = RequestMethod.GET)
    public ArrayList<Message> getMyHistory(@RequestParam("userName") String username, @RequestParam("dest") String dest) {
        System.out.println("requeted for " + username + " and " + dest);
        ArrayList<Message> list = new ArrayList<>();
        list.addAll(repo.findByNameAndDest(username, dest));
        list.addAll(repo.findByNameAndDest(dest, username));
        list.sort(Comparator.comparingInt(Message::getId));
        return (list);
    }
}
