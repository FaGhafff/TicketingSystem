package main.java.com.web.socket.websocket.repositories;

import main.java.com.web.socket.websocket.bean.MessageBean;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface MessageRepository extends CrudRepository<MessageBean,Integer> {
//    @Query("select * from MessageBean where(name='name')")
    List<MessageBean> findByNameAndDest(String name,String dest);

}
