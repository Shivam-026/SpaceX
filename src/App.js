import React from "react";
import './App.css';
import Details from './Details';
import { Route, Switch } from "react-router-dom";
import Launchpads from "./Launchpads";
import Header from "./Layout/Header";


function App() {
  return (
    <div className = "App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Launchpads}/>
        <Route path="/Details" component={Details}/>
     
      </Switch>
    </div>
  );
}

 
export default App;
 