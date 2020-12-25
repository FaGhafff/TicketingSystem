package com.web.socket.websocket.bean;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class ForgetPass {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(unique = true)
    private String username;
    private String token;
    private String code;
    private boolean validate;

    public ForgetPass(String username, String token, String code, boolean validate) {
        this.username = username;
        this.token = token;
        this.code = code;
        this.validate = validate;
    }

    public ForgetPass() {
    }
}
