package main.java.com.web.socket.websocket.controller;

import com.google.gson.Gson;
import main.java.com.web.socket.websocket.bean.MessageBean;
import main.java.com.web.socket.websocket.repositories.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.lang.management.MemoryMXBean;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

@RestController()
@RequestMapping("/init")
public class IntializerController {

    @Autowired
    MessageRepository repo;

    @RequestMapping("/")
    public String initData() {
        MessageBean msg = new MessageBean();
        msg.setName("admin");
        msg.setDest("developer");
        msg.setMessage("hi dev");
        repo.save(msg);
        msg = new MessageBean();
        msg.setName("developer");
        msg.setDest("admin");
        msg.setMessage("hey admin! how are you!!!");
        repo.save(msg);
        return "done";
    }

    @RequestMapping(value = "/getMessengerItems", method = RequestMethod.GET)
    public List<String> getMessengerItems(@RequestParam String role) {
        List<String> list = new ArrayList<>(Arrays.asList("admin", "developer", "analyzer", "frontEnd"));
        list.remove(role);
        return list;
    }

    @RequestMapping(value = "/myHistory", method = RequestMethod.GET)
    public ArrayList<MessageBean> getMyHistory(@RequestParam("userName") String username, @RequestParam("dest") String dest) {
        System.out.println("requeted for "+username+" and "+dest);
        ArrayList<MessageBean> list = new ArrayList<>();
        list.addAll(repo.findByNameAndDest(username,dest));
        list.addAll(repo.findByNameAndDest(dest,username));
        list.sort(Comparator.comparingInt(MessageBean::getId));
        return (list);
    }
    @RequestMapping("/test")
    public ArrayList<String> test(){
        System.out.println("requested !");
        return (new ArrayList<>(Arrays.asList("ali","fati","mohmmad")));
    }
}
