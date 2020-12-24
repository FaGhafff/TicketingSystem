import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home.component";
import Login from "./components/Login.copmponent";
import Register from "./components/register.copmponent";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Forget} from "./components/forget.component";
import {Reset} from "./components/reset.copmponent";
function App() {
  return (
      <BrowserRouter>
    <div className="App">

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/forget" component={Forget}/>
            <Route exact path="/reset" component={Reset}/>
          </Switch>

        </div>
      </div>
    </div>
      </BrowserRouter>
  );
}

export default App;
