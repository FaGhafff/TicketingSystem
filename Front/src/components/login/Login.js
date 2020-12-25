import React, {Component} from 'react';
import mah1 from '../../photo/moon-1.svg';
import axios from 'axios';
import {Route, BrowserRouter,Switch,Link} from "react-router-dom";
import "./login.css"
import Forget from "./components/Forget"
import Entry from "./components/Entry";
import Reset from "./components/Reset"

class Login extends Component {
    data={};
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <BrowserRouter>
                                <Switch>
                                    <Route exact path="/" component={()=><Entry />} />
                                </Switch>
                        </BrowserRouter>
                        <div className="line"></div>
                        <div>
                            <img id="mah1" src={mah1} alt={mah1}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login