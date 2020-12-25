import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./components/login/Login"
import Manager from "./components/manager/Manager"
import Admin from "./components/admin/Admin"
import Employee from "./components/employee/Employee"
import Customer from "./components/customer/Customer"
import Forget from "./components/login/components/Forget"
import Reset from "./components/login/components/Reset"

class App extends Component {
    data = {}

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={()=><Login/>}/>
                        <Route exact path="/manager" component={()=><Manager />}/>
                        <Route exact path="/admin" component={()=><Admin />}/>
                        <Route exact path="/customer" component={()=><Customer />}/>
                        <Route exact path="/designer" component={()=><Employee role="designer" />}/>
                        <Route exact path="/frontend" component={()=><Employee role="frontend" />}/>
                        <Route exact path="/backend" component={()=><Employee role="backend" />}/>
                        <Route exact path="/forget" component={Forget} />
                        <Route exact path="/reset" component={Reset} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
