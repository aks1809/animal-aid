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
import ValuePage from "./Components/Values";
import HistoryPage from "./Components/History";
import TeamPage from "./Components/Team";
import AdminPage from "./Components/Admin";
import StoryForm from "./Components/StoryForm";
import StoryPage from "./Components/SuccessStories";
import SsParticularPage from "./Components/SsParticular";
import HelpPage from "./Components/HowToHelp";
import AdoptPage from "./Components/Adopt";
import AdoptCarouselForm from "./Components/AdoptCarousel";
import AdoptParticularPage from "./Components/AdoptParticular";
import AdoptionFormPage from "./Components/AdoptionForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/whatWeDo" component={WhatWeDo} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/donate" component={Donate} />
          <Route exact path="/whatWeDo/rescue" component={RescuePage} />
          <Route exact path="/whatWeDo/medical" component={MedicalPage} />
          <Route exact path="/whatWeDo/cruelty" component={CrueltyPage} />
          <Route exact path="/whatWeDo/education" component={EducationPage} />
          <Route exact path="/about/values" component={ValuePage} />
          <Route exact path="/about/history" component={HistoryPage} />
          <Route exact path="/about/team" component={TeamPage} />
          <Route exact path="/admin" component={AdminPage} />
          <Route exact path="/admin/Form" component={StoryForm} />
          <Route
            exact
            path="/admin/adoptCarouselForm"
            component={AdoptCarouselForm}
          />
          <Route exact path="/success-stories" component={StoryPage} />
          <Route exact path="/howToHelp" component={HelpPage} />
          <Route exact path="/howToHelp/adopt" component={AdoptPage} />
          <Route
            exact
            path="/success-stories/:storyId"
            component={SsParticularPage}
          />
          <Route
            exact
            path="/howToHelp/adopt/:adoptId"
            component={AdoptParticularPage}
          />
          <Route
            exact
            path="/howToHelp/adopt/:adoptId/adoptionForm"
            component={AdoptionFormPage}
          />
          <Route path="*" component={NotFound} />
        </Switch>
        <TalkToUs />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
