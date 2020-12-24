import React, {Component} from 'react';
import mah1 from '../photo/moon-1.svg';
import axios from 'axios';
import {Link} from "react-router-dom";
import Nav from './nav.copmponent';
import Redirect from "react-dom";
import reportWebVitals from "../reportWebVitals";
// import mah2 from '../photo/Untitled-2.svg';
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Message: "",
            ShowMessage: false,
            UserName: "",
            Password: ""
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        axios.post('http://localhost:8080/login', {username: this.state.UserName, password: this.state.Password}).then(
            res => {
                console.log(res)

            }
        ).catch(
            err => {
                console.log(err.message)
                this.setState({
                    Message: err.message,
                    ShowMessage: true
                })

            }
        )

        Redirect.push("http://google.com");
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <img id="mah1" src={mah1} alt={mah1}/>
                    {/*<img  id="mah2" src={mah2} alt={mah}/>*/}
                    <div className="form-group">
                        <input type="text" className="text-fild" placeholder="User Name"
                               onChange={e => this.setState({Username: e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="text-fild2" placeholder="Password"
                               onChange={e => this.setState({Password: e.target.value})}/>
                    </div>

                    <button className="text-fild3">Login</button>
                    <div className="line"></div>
                    <p className="forget-password text-right">
                        <Link to={'/forget'}><a id="a">forget password ?</a></Link>
                    </p>
                    {this.state.ShowMessage ? <p className="text-center font-weight-bold">{this.state.Message}</p> :
                        <p></p>}
                    {/*<p id="moon">moon</p>*/}
                </form>
            </div>
        )
    }

}