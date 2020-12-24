package main.java.com.web.socket.websocket.bean;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class MessageBean {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String message;
    private String dest;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setDest(String dest) {
        this.dest = dest;
    }

    public String getDest() {
        return dest;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "MessageBean{" +
                "name='" + name + '\'' +
                ", message='" + message + '\'' +
                ", dest='" + dest + '\'' +
                '}';
    }
}
