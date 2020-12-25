import React, {Component} from 'react'
import {Link,Redirect} from "react-router-dom";

class Entry extends Component {
    constructor(props) {
        super(props);
        this.state={
            redirect:null
        }
    }

    data = {username: "", password: ""}

    handleSubmit = () => {

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
                </div>
                <div className="form-group">
                    <input type="password" className="text-fild2" placeholder="Password"
                           onChange={e => this.data.password = e.target.value}/>
                </div>

                <button onClick={this.handleSubmit} className="text-fild3">Login</button>
                <p className="forget-password text-right">
                    <Link to={'forget'}><a id="a">forget password ?</a></Link>
                </p>
            </div>
        )
    }

}


export default Entry;