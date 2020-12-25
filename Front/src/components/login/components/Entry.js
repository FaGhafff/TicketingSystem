import React, {Component} from 'react'
import {Link, Redirect} from "react-router-dom";
import usernamePhoto from "../../../photo/usernamePhoto.svg";
import passwordPhoto from "../../../photo/passwordPhoto.svg";
import facebookPhoto from "../../../photo/facebookPhoto.svg";
import instagramPhoto from "../../../photo/instagramPhoto.svg";
import twitterPhoto from "../../../photo/twitterPhoto.svg";
import axios from "axios";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import "../login.css"


class Entry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: null
        }
    }

    data = {username: "", password: ""}

    handleSubmit = () => {
        if (this.data.username.length === 0)
            NotificationManager.warning('username is empty !!!');
        else {

            console.log(this.data)
            axios.post("http://localhost:8080/login/", null, {
                params: {
                    username: this.data.username,
                    password: this.data.password
                }
            }).then(value => {
                console.log("here")
                const role = value.data.role?.toLowerCase();
                localStorage.setItem("username", value.data.username)
                window.location.href = ("/" + role);
            }).catch(err => {
                console.log("err")
                NotificationManager.error('username or password is wrong');
                console.log(err)
            })
            // var unValidPass = true
            // if (unValidPass){
            //     <div className="alert">
            //         <span className="closebtn" onClick="this.parentElement.style.display='none';">&times;</span>
            // The entered password is Incorrect .
            // </div>
            // }
            // else{}

        }
    }
    onclickForgetPass = () => {
        if (this.data.username.length === 0) {
            NotificationManager.warning('username is empty !!!');
        } else {
            localStorage.setItem("username", this.data.username)
            window.location.href = ("/forget");
        }
    }


    render() {

        return (

            <div>
                <div className="form-group">

                    <input type="text" className="text-fild" placeholder="User Name"
                           onChange={e => this.data.username = e.target.value}/>
                    <img id="usernamePhoto" src={usernamePhoto} alt={usernamePhoto}/>
                </div>
                <div className="form-group">
                    <input type="password" className="text-fild2" placeholder="Password"
                           onChange={e => this.data.password = e.target.value}/>
                    <img id="passwordPhoto" src={passwordPhoto} alt={passwordPhoto}/>

                </div>

                <button onClick={this.handleSubmit} className="text-fild3">Login</button>
                <p className="forget-password text-right">
                    <Link to={""}><a id="a" onClick={this.onclickForgetPass}>forget password ?</a></Link>

                </p>
                <img id="facebookPhoto" src={facebookPhoto} alt={facebookPhoto}/>
                <img id="instagramPhoto" src={instagramPhoto} alt={instagramPhoto}/>
                <img id="twitterPhoto" src={twitterPhoto} alt={twitterPhoto}/>

                <NotificationContainer/>
            </div>

        )
    }

}


export default Entry;