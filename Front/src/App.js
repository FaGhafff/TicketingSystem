import Home from "./components/home.component";
import Login from "./components/Login.copmponent";
import Register from "./components/register.copmponent";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Forget} from "./components/forget.component";
import {Reset} from "./components/reset.copmponent";
import Developer from './components/company/Developer'
function App() {
  return (
      <BrowserRouter>
    <div >
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/forget" component={Forget}/>
        <Route exact path="/reset" component={Reset}/>
      </Switch>

    </div>
      </BrowserRouter>
  );
}

export default App;
