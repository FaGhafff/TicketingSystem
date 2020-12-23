import React , {Component} from 'react';
import mah1 from '../photo/moon-1.svg';
import axios from 'axios';
import {Link} from "react-router-dom";
import Nav from './nav.copmponent';
// import mah2 from '../photo/Untitled-2.svg';
export default  class Register extends Component{

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            userName : this.UserName,
            password : this.Password
        };
        axios.post('http://localhost:8080/login',{username:data.userName,password:data.password}).then(
            res =>{
                console.log(res)
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
    };
    render() {
        return(
            <div>
                <Nav/>
                <form onSubmit={this.handleSubmit}  >
                    <img id="mah1" src={mah1} alt={mah1}/>
                    {/*<img  id="mah2" src={mah2} alt={mah}/>*/}
                    <div className="form-group">
                        <input type="text" className="text-fild" placeholder="User Name"
                        onChange={e => this.UserName = e.target.value}/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="text-fild2" placeholder="Password"
                               onChange={e => this.Password = e.target.value}/>
                    </div>

                        <button  className="text-fild3" >Login</button>

                    <div className="line"></div>
                    <p className="forget-password text-right" >
                        <Link to={'/forget'} ><a id="a">forget password ?</a></Link>
                    </p>
                    {/*<p id="moon">moon</p>*/}
                </form>
            </div>
        )
    }

}