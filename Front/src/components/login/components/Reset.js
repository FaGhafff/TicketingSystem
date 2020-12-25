import React, {Component} from 'react'
import mah1 from "../../../photo/moon-1.svg";
import facebookPhoto from "../../../photo/facebookPhoto.svg";
import instagramPhoto from "../../../photo/instagramPhoto.svg";
import twitterPhoto from "../../../photo/twitterPhoto.svg";
import newpassPhoto from "../../../photo/new password.svg"

class Reset extends Component {
    render() {
        return(    <form onSubmit={this.handleSubmit}  >
            <img id="mah1" src={mah1} alt={mah1}/>
            {/*<img  id="mah2" src={mah2} alt={mah}/>*/}
            <div className="form-group">
                <input type="text" className="text-fild" placeholder=" New Password "
                       onChange={e => this.NewPassword = e.target.value}/>
                <img id="newpassPhoto" src={newpassPhoto} alt={newpassPhoto}/>

            </div>


            <button  className="text-fild3" >Verify</button>

            <div className="line"></div>
            <img id="facebookPhoto" src={facebookPhoto} alt={facebookPhoto}/>
            <img id="instagramPhoto" src={instagramPhoto} alt={instagramPhoto}/>
            <img id="twitterPhoto" src={twitterPhoto} alt={twitterPhoto}/>
        </form>)
    }

}

export default Reset;