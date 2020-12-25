package com.web.socket.websocket.bean;

import lombok.Data;
import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Map;
import java.util.Set;

@Entity
@Data
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id ;
    private String from;
    private String to;
    private LocalDate date;
    private String responder;
//    @ElementCollection
//    private Map<Integer,String> texts;
    @Enumerated
    private TicketStatus status;
    @Enumerated
    private TicketPriority priority;
    private int rate;

    public Ticket() {
    }

}
