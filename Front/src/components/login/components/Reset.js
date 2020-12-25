import React, {Component} from 'react'
import mah1 from "../../../photo/moon-1.svg";
import facebookPhoto from "../../../photo/facebookPhoto.svg";
import instagramPhoto from "../../../photo/instagramPhoto.svg";
import twitterPhoto from "../../../photo/twitterPhoto.svg";
import newpassPhoto from "../../../photo/new password.svg";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import axios from "axios";

class Reset extends Component {

    constructor(props) {
        super(props);
        this.state = {
            password: ""
        }
    }


    handleSubmit = () => {
        if (this.state.password.length === 0) {

            NotificationManager.warning('password is empty !!!');
        } else {
            axios.post("http://localhost:8080/forgetPassword/changePass", null, {
                params: {
                    username: localStorage.getItem("username"), password: this.state.password
                }
            }).then(value => {
                console.log(value)
                NotificationManager.warning('password changed');
                window.location.href = ("http://localhost:3000");

            }).catch(err => {
                NotificationManager.warning('something is wrong');
                console.log(err)

            })
        }
    }

    render() {
        return (
            <div className="App">
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        {/*<form >*/}
                            <img id="mah1" src={mah1} alt={mah1}/>
                            {/*<img  id="mah2" src={mah2} alt={mah}/>*/}
                            <div className="form-group">
                                <input type="text" className="text-fild" placeholder=" New Password "
                                       onChange={e =>
                                           this.setState({password:e.target.value})

                                       }/>
                                <img id="newpassPhoto" src={newpassPhoto} alt={newpassPhoto}/>

                            </div>

                            <button onClick={this.handleSubmit} className="text-fild3">Verify</button>

                            <div className="line"></div>
                            <img id="facebookPhoto" src={facebookPhoto} alt={facebookPhoto}/>
                            <img id="instagramPhoto" src={instagramPhoto} alt={instagramPhoto}/>
                            <img id="twitterPhoto" src={twitterPhoto} alt={twitterPhoto}/>
                        {/*</form>*/}
                    </div>
                </div>
                <NotificationContainer/>
            </div>
        )
    }

}

export default Reset;