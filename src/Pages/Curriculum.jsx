import {React, useEffect, useState} from 'react'
import { Contact } from '../components/contact'
import { Navigation } from '../components/navigation'
import { Services } from '../components/services'
import SmoothScroll from "smooth-scroll";
import JsonData from '../data/data.json';
import NewsTicker from '../components/newsTicker';
import { Footer } from '../components/footer';
import { Container, Grid } from '@material-ui/core';

const Curriculum = () => {

  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
  });
  
  const latestNews = ['Montessori Mode of Curriculum, Education and Assessment methods'];
    
  const [landingPageData, setLandingPageData] = useState({});
  
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);
    const titleStyle = {
      fontSize: '6vw',
    };

  return (
    <>
    <NewsTicker newsItems={latestNews}/>
    <Navigation/>
    <header id="header">
      <div className="intro">
        <img  className='header-image' src="https://res.cloudinary.com/dx78kzenz/image/upload/v1703075169/m2_ttg6bj.jpg"  alt="" />
        <div className="overlay">
          <Container>
            <Grid container justifyContent="center">
              <Grid item xs={12} md={8}>
                {/* <div className="enburns-top"> */}
                  <div className="row">
                    <div className="col-md-8 col-md-offset-2 intro-text">
                    <h1 style={titleStyle} >
                   Curriculum
                    </h1>
                    <p>Montessori Mode of Education and Assessment</p>
                    </div>
                  </div>
              
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </header>
    <Services/>
    <Footer/>
    </>
  )
}

export default Curriculum