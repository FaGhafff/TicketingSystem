package com.web.socket.websocket.repositories;

import com.web.socket.websocket.bean.UserPass;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserPassRepo extends CrudRepository<UserPass,Integer> {
    Optional<UserPass> findByUsername(String username);
}
