import React, { useState, useEffect } from "react";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import NewsTicker from './components/newsTicker';

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
        <AllRoute/>
      </div>
    </div>
  );
};

export default App;
