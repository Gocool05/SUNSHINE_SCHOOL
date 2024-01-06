import React from 'react'
import { Features } from '../components/features'
import { Navigation } from '../components/navigation'
import NewsTicker from '../components/newsTicker'
import SmoothScroll from "smooth-scroll";
import { Footer } from '../components/footer';
import { Container, Grid } from '@material-ui/core';
import { Typography,Button } from '@mui/material';
import { Image } from '@mui/icons-material';
const Ethos = () => {

  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
  });
  const titleStyle = {
    fontSize: '6vw',
  };

  const latestNews = ['Just checking out our Ethos !'];
  return (
  <>
  <NewsTicker newsItems={latestNews}/>
    <Navigation/>
    <header id="header">
      <div className="intro">
        <img className='header-image' src="https://res.cloudinary.com/dx78kzenz/image/upload/v1704459832/Ethos_sgaxla.jpg"  alt="" />
        <div className="overlay">
          <Container>
            <Grid container justifyContent="center">
              <Grid item xs={12} md={8}>
                {/* <div className="enburns-top"> */}
                  <div className="row">
                    <div className="col-md-8 col-md-offset-2 intro-text">
                    <h1 style={titleStyle}>
                   Ethos
                    </h1>
                    <p>The ethos reflects its fundamental values, mission, and the overall atmosphere.</p>
                    </div>
                  </div>
              
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </header>
    <div className='ethos'>
    <Features/>
    </div>
    <Footer/>
    </>
  )
}

export default Ethos