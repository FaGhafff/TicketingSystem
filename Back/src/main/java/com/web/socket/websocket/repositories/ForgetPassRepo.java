package com.web.socket.websocket.repositories;

import com.web.socket.websocket.bean.ForgetPass;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface ForgetPassRepo extends CrudRepository<ForgetPass,Integer> {
    Optional<ForgetPass> findByUsername(String username);
    Optional<ForgetPass> findAllByUsername(String username);
    Optional<ForgetPass> findByToken(String token);

}
