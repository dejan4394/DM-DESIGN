import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar"
import SignUp from "./components/pages/SignUp"
import Home from "./components/pages/Home"
import Services from "./components/pages/Services"
import Products from "./components/pages/Products";
import SignIn from "./components/pages/SignIn";


function App() {
  return (
    <>
    <Router>
    <Navbar />
 
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sign-up"  component={SignUp} />
      <Route path="/services"  component={Services} />
      <Route path="/products"  component={Products} />
      <Route path="/sign-in"  component={SignIn} />


    </Switch>
    </Router>
    
    
    </>
  );
}

export default App;
