import React , {Component} from 'react';
import mah1 from "../photo/moon-1.svg";
import {Reset} from "./reset.copmponent";
import {Link, Route} from "react-router-dom";
export class Forget extends Component{
     handleSubmit = e =>{
         e.preventDefault();
};
    render() {
        return(
            <form onSubmit={this.handleSubmit}  >
                <img id="mah1" src={mah1} alt={mah1}/>
                {/*<img  id="mah2" src={mah2} alt={mah}/>*/}
                <div className="form-group">
                    <input type="text" className="text-fild" placeholder="Verification Code "
                           onChange={e => this.VerificationCode = e.target.value}/>
                </div>



                <button  className="text-fild3" ><Link to={'/reset'} >Verify</Link></button>

                <div className="line"></div>

            </form>

        )
    }
}