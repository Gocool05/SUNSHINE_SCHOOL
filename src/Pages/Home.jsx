import {React, useEffect, useState} from 'react'
import NewsTicker from '../components/newsTicker'
import { Contact } from '../components/contact'
import { About } from '../components/about'
import { Header } from '../components/header'
import SmoothScroll from "smooth-scroll";
import JsonData from '../data/data.json'
import { Navigation } from '../components/navigation'
import AdmissionsModal from '../components/admissionModal'
import { Link } from 'react-router-dom'



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
        const [modalOpen, setModalOpen] = useState(true);

        useEffect(() => {
          const timer = setTimeout(() => {
            setModalOpen(false);
          }, 5000); 
          return () => clearTimeout(timer);
        }, []); 

  return (
    <>
    <NewsTicker newsItems={latestNews} />
    <Navigation />
    <Header data={landingPageData.Header}/>
    <About data={landingPageData.About}/>
    <Contact data={landingPageData.Contact}/>
    <AdmissionsModal open={modalOpen} onClose={() => setModalOpen(false)} />
</>
    )
}

export default Home;