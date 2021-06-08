import "./App.css";
import Login from "./login/Login";
import Signup from "./login/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/subscription" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
