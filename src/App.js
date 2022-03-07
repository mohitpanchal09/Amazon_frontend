import React from "react";
import "./App.css";
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 
"react-router-dom";
import Checkout from "./Checkout";
import Clothing from "./Clothing";
import Login from "./Login";
import Phones from "./Phones";
import Gadgets from "./Gadgets";
function App() {
  return (
    
      <div className="app">
        <Router>
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
            </Route>
            <Route path="/clothing">
              <Header />
              <Clothing />
              </Route>
              <Route path='/phones'>
                <Header />
                <Phones />
              </Route>
              <Route path='/gadgets'>
                <Header />
                <Gadgets />
              </Route>
            
                <Route path="/login">
                  <Login />
                </Route>
      
           <Route path="/">
            <Header />
            <Home />
          </Route> 

        </Switch>
        </Router>
      </div>
    
  );
}

export default App;
