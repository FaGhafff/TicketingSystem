import React, {Component} from 'react'
import {Link,Redirect} from "react-router-dom";
import usernamePhoto from "../../../photo/usernamePhoto.svg";
import passwordPhoto from "../../../photo/passwordPhoto.svg";
import facebookPhoto from "../../../photo/facebookPhoto.svg";
import instagramPhoto from "../../../photo/instagramPhoto.svg";
import twitterPhoto from "../../../photo/twitterPhoto.svg";
// import "./login.css"
class Entry extends Component {
    constructor(props) {
        super(props);
        this.state={
            redirect:null
        }
    }

    data = {username: "", password: ""}

    handleSubmit = () => {
        // var unValidPass = true
        // if (unValidPass){
        //     <div className="alert">
        //         <span className="closebtn" onClick="this.parentElement.style.display='none';">&times;</span>
        //         The entered password is Incorrect .
        //     </div>
        // }
        // else{}

        //todo validate from server then pass params and redirect
        localStorage.setItem("username",this.data.username)
        window.location.href=("/manager");
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
                    <Link to={'forget'}><a id="a">forget password ?</a></Link>
                </p>
                <img id="facebookPhoto" src={facebookPhoto} alt={facebookPhoto}/>
                <img id="instagramPhoto" src={instagramPhoto} alt={instagramPhoto}/>
                <img id="twitterPhoto" src={twitterPhoto} alt={twitterPhoto}/>

            </div>
        )
    }

}


export default Entry;