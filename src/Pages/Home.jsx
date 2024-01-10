import {React, useEffect, useState} from 'react'
import NewsTicker from '../components/newsTicker'
import { Contact } from '../components/contact'
import { About } from '../components/about'
import { Header } from '../components/header'
import SmoothScroll from "smooth-scroll";
import JsonData from '../data/data.json'
import { Navigation } from '../components/navigation'
import { Features } from '../components/features'
import { Team } from '../components/Team'
import { Services } from '../components/services'
import { Testimonials } from '../components/testimonials'


const Home = () => {

    const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        speedAsDuration: true,
      });
      
      const latestNews = ['Sunshine Montessori School, ECR Chennai, announces the opening of admissions for the year 2024 - Secure your child\'s educational journey with us!'];
        
      const [landingPageData, setLandingPageData] = useState({});
      
        useEffect(() => {
          setLandingPageData(JsonData);
        }, []);


  return (
    <>
    <NewsTicker newsItems={latestNews} />
    <Navigation />
    <Header data={landingPageData.Header}/>
    <About data={landingPageData.About}/>
    {/* <Features data={landingPageData.Features}/> */}
    {/* <Services data={landingPageData.Services}/> */}
    {/* <Testimonials data={landingPageData.Testimonials}/> */}
    <Contact data={landingPageData.Contact}/>
</>
    )
}

export default Home;