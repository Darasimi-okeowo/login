import "./App.css";
import Login from "./login/Login";
import Signup from "./login/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Signup" component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
