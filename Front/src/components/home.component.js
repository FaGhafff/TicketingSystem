import React, {Component} from 'react';
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class Home extends Component {
    render() {
        return (
            <div className="App">
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <h2>you are not logged in </h2>
                    </div>
                </div>
            </div>
        )
    }

}