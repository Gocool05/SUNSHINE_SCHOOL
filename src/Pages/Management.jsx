import {React, useEffect, useState} from 'react'
import { Navigation } from '../components/navigation';
import { Team } from '../components/Team'
import JsonData from '../data/data.json';
import NewsTicker from '../components/newsTicker';
import SmoothScroll from "smooth-scroll";
import { Footer } from '../components/footer';
import { Container, Grid } from '@material-ui/core';

const Management = () => {

  const [landingPageData, setLandingPageData] = useState({});
  
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);

    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 1000,
      speedAsDuration: true,
    });
    
    const latestNews = ['The future is mysterious and thus one is not aware of what the evolution of time has potentially kept in every child!'];

    const titleStyle = {
      fontSize: '6vw',
    };
  return (
    <>
    <NewsTicker newsItems={latestNews}/>
    <Navigation/>
    <header id="header">
      <div className="intro">
        <img className='header-image' src="https://res.cloudinary.com/dx78kzenz/image/upload/v1703075171/m1_qc29mi.jpg" alt="" />
        <div className="overlay">
          <Container>
            <Grid container justifyContent="center">
              <Grid item xs={12} md={8}>
                {/* <div className="enburns-top"> */}
                  <div className="row">
                    <div className="col-md-8 col-md-offset-2 intro-text">
                    <h1 style={titleStyle}>
                   Management
                    </h1>
                    <p>At Sunshine, we believe in open conversations between students and teachers</p>
                    </div>
                  </div>
              
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </header>
    <Team  data={landingPageData.Team} />
    <Footer/>
    </>
  )
}

export default Management;