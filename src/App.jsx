import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import NewsTicker from './components/newsTicker';
import Home from "./Pages/Home";
import Curriculum from "./Pages/Curriculum";
import AllRoute from "./AllRoutes/AllRoute";

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const latestNews = ['Sunshine Montessori School, ECR Chennai, announces the opening of admissions for the year 2024 - Secure your child\'s educational journey with us!'];

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const handleContextMenu = (e) => {
    e.preventDefault();
    // Optionally, you can add custom logic here if needed.
  };

  return (
    <div onContextMenu={handleContextMenu} className="disable-right-click">
      <div>
        {/* <NewsTicker newsItems={latestNews} />
        <Navigation />
        <Header data={landingPageData.Header} />
        <About data={landingPageData.About} />
        <Features data={landingPageData.Features} />
        <Services data={landingPageData.Services} />
        <Team data={landingPageData.Team} />
        <Gallery data={landingPageData.Gallery} />
        <Contact data={landingPageData.Contact} /> */}
        {/* <Home/> */}
        <AllRoute/>
      </div>
    </div>
  );
};

export default App;
