import React, { useEffect, useState } from "react";
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
import ValuePage from "./Components/Values";
import HistoryPage from "./Components/History";
import TeamPage from "./Components/Team";
import axios from "./apis/axios";
import Pusher from "pusher-js";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/talkToUs/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("fb46276ac52a5ca3188c", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("message");
    channel.bind("inserted", function (data) {
      setMessages([...messages, data]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

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
          <Route exact path="/about/values" component={ValuePage} />
          <Route exact path="/about/history" component={HistoryPage} />
          <Route exact path="/about/team" component={TeamPage} />
          <Route path="*" component={NotFound} />
        </Switch>
        <TalkToUs messageList={messages} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
