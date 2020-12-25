import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./components/login/Login"
import Manager from "./components/manager/Manager"

class App extends Component {
    data = {}

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={()=><Login/>}/>
                        <Route exact path="/manager" component={()=><Manager username="ali" data={this.data} />}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
