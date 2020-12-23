import React, {Component} from 'react';
import {Link} from "react-router-dom";
import smallLogo from '../photo/small logo.svg';
import profilePhoto from '../photo/profilePhoto (1).svg';
import powerPhoto from '../photo/powerPhoto.svg';
export default class Nav extends Component{
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light fixed-top" id="navbar">
                <div className="container">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <img id="smallLogo" src={smallLogo} alt={smallLogo}/>

                                <input type="image" name="profilePhoto" src={profilePhoto} id="profilePhoto" alt="profile"/>

                            </li>
                            <li className="nav-item">
                                <input type="image" name="powerPhoto" src={powerPhoto} id="powerPhoto" alt="log out"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

}