import React, {Component} from "react"
import mah1 from "../../../photo/moon-1.svg";
import {Link} from "react-router-dom";
import facebookPhoto from "../../../photo/facebookPhoto.svg";
import instagramPhoto from "../../../photo/instagramPhoto.svg";
import twitterPhoto from "../../../photo/twitterPhoto.svg";
import verification from "../../../photo/verificatin.svg";
class Forget extends Component {

    render() {
        return (   <form onSubmit={this.handleSubmit}  >
            <img id="mah1" src={mah1} alt={mah1}/>

            <div className="form-group">
                <input type="text" className="text-fild" placeholder="Verification Code "
                       onChange={e => this.VerificationCode = e.target.value}/>
                <img id="verification" src={verification} alt={verification}/>

            </div>

            <button  className="text-fild4" ><Link to={'/reset'} className="a2" >Verify</Link></button>

            <div className="line"></div>
                <img id="facebookPhoto" src={facebookPhoto} alt={facebookPhoto}/>
                <img id="instagramPhoto" src={instagramPhoto} alt={instagramPhoto}/>
                <img id="twitterPhoto" src={twitterPhoto} alt={twitterPhoto}/>
        </form>
        )
    }
}

export default Forget;