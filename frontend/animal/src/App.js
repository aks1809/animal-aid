import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import WhatWeDo from "./Components/WhatWeDo";
import HomePage from "./Components/HomePage";
import Donate from "./Components/Donate";
import NotFound from "./Components/NotFound";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import TalkToUs from "./Components/TalkToUs";
import RescuePage from "./Components/Rescue";
import MedicalPage from "./Components/Medical";
import CrueltyPage from "./Components/Cruelty";
import EducationPage from "./Components/Education";
import HowToHelp from "./Components/HowToHelp";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/whatWeDo" component={WhatWeDo} />
          <Route exact path="/howToHelp" component={HowToHelp} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/donate" component={Donate} />
          <Route exact path="/whatWeDo/rescue" component={RescuePage} />
          <Route exact path="/whatWeDo/medical" component={MedicalPage} />
          <Route exact path="/whatWeDo/cruelty" component={CrueltyPage} />
          <Route exact path="/whatWeDo/education" component={EducationPage} />
          <Route path="*" component={NotFound} />
        </Switch>
        <TalkToUs />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
