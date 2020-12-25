package com.web.socket.websocket.repositories;

import com.web.socket.websocket.bean.Message;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MessageRepository extends CrudRepository<Message,Integer> {
//    @Query("select * from MessageBean where(name='name')")
    List<Message> findByNameAndDest(String name, String dest);

}
