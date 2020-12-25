package com.web.socket.websocket.bean;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class TicketMessage {
    @Id
    private int id;
    private String from;
    private String to;
    private String text;
}
