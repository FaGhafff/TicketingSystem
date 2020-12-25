import React, {Component} from "react"
import mah1 from "../../../photo/moon-1.svg";
import {Link} from "react-router-dom";
import facebookPhoto from "../../../photo/facebookPhoto.svg";
import instagramPhoto from "../../../photo/instagramPhoto.svg";
import twitterPhoto from "../../../photo/twitterPhoto.svg";
import verification from "../../../photo/verificatin.svg";
import "../login.css";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import axios from 'axios';

class Forget extends Component {
    componentDidMount() {
        axios.post("http://localhost:8080/forgetPassword/new", null, {params: {username: localStorage.getItem("username")}})
            .then(value => {
                console.log(value)
                localStorage.setItem("token",value.data.token)
                NotificationManager.warning(value.data.SmsResponse);
            }).catch(err => {
            console.log(err)
            NotificationManager.error("spmething is wrong");
        })
    }

    handleSubmit = () => {
        if (this.code.length === 0)
            NotificationManager.warning('code cant be empty');
        else {
            axios.get("http://localhost:8080/forgetPassword/validate",{
                params:{
                token:localStorage.getItem("token"),
                    code:this.code
                }
            }).then(value => {
                console.log(value)
                window.location.href = ("/reset");
            }).catch(err=>{
                NotificationManager.error(err.message);
            })
        }

    }

    render() {
        return (
            <div className="App">
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        {/*<form onSubmit={this.handleSubmit}>*/}
                            <img id="mah1" src={mah1} alt={mah1}/>

                            <div className="form-group">
                                <input type="text" className="text-fild" placeholder="Verification Code "
                                       onChange={e => this.code = e.target.value}/>
                                <img id="verification" src={verification} alt={verification}/>

                            </div>

                            <button onClick={this.handleSubmit} className="text-fild4"><Link to={'/reset'} className="a2">Verify</Link></button>

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

export default Forget;