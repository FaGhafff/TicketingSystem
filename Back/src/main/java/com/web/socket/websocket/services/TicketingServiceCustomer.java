package com.web.socket.websocket.services;

import com.web.socket.websocket.bean.Ticket;
import com.web.socket.websocket.repositories.TicketingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TicketingServiceCustomer {
    @Autowired
    private TicketingRepo repo;

    public Optional<Ticket> getMyTickets(String username){
       Optional<Ticket> ticket = repo.findAllByFrom(username);
       if (ticket.isEmpty())
           return null;
       else
           return ticket;

    }
    public void delete(String username ,String[] ticketIDs){}
    public void export(String[] ticketIDs){}
    public void newTicket(Ticket ticket){}
    public void sendMessageTo(String ticketID,String username, String text){}
    public void rateForTicket(String ticketID , int rate){}
}
