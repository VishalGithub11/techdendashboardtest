import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Navbar from "./componenet/Navbar";
import SignIn from "./componenet/SignIn";
import Signup from "./componenet/SignUp";
import Dashboard from './componenet/Dashboard/Dashboard';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
