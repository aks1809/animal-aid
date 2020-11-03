import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import WhatWeDo from "./Components/WhatWeDo";
import HomePage from "./Components/HomePage";
import Donate from "./Components/Donate";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/WhatWeDo" component={WhatWeDo} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/donate" component={Donate} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
