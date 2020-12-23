import React , {Component} from 'react';
import mah1 from "../photo/moon-1.svg";
export class Reset extends Component{
    handleSubmit = e =>{
        e.preventDefault();
    };
    render() {
        return(
            <form onSubmit={this.handleSubmit}  >
                <img id="mah1" src={mah1} alt={mah1}/>
                {/*<img  id="mah2" src={mah2} alt={mah}/>*/}
                <div className="form-group">
                    <input type="text" className="text-fild" placeholder=" New Password "
                           onChange={e => this.NewPassword = e.target.value}/>
                </div>


                <button  className="text-fild3" >Verify</button>

                <div className="line"></div>

            </form>

        )
    }
}