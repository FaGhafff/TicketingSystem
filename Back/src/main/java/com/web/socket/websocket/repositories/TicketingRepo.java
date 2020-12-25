package com.web.socket.websocket.repositories;

import com.web.socket.websocket.bean.Ticket;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface TicketingRepo extends CrudRepository<Ticket, Integer> {
    Optional<Ticket> findAllByFrom(String from);


}
