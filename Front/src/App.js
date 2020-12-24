import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./components/login/Login"
function App() {
  return (
      <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Login}/>
      </Switch>
    </div>
      </BrowserRouter>
  );
}

export default App;
