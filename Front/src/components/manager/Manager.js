import React,{Component} from "react"
class Manager extends Component{

    render() {
        console.log("try to render")
        return(
            <div> its manager and username: {localStorage.getItem("username")} is and role: {this.props.data.role} is </div>
        )
    }
}export default Manager