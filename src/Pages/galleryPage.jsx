import React from 'react'
import { Gallery } from '../components/gallery';
import { Navigation } from '../components/navigation';
import NewsTicker from '../components/newsTicker';
import SmoothScroll from "smooth-scroll";
import { Footer } from '../components/footer';
import { Container, Grid } from '@material-ui/core';
const GalleryPage = () => {

  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
  });
  
  const latestNews = ['Just checking out our Gallery Page!'];

  const titleStyle = {
    fontSize: '6vw',
  };

  return (
    <>
    <NewsTicker newsItems={latestNews}/>
    <Navigation/>
    <header id="header">
      <div className="intro" >
        <img className='header-image'  src="https://res.cloudinary.com/dx78kzenz/image/upload/v1703075169/m5_bdkoiz.jpg" alt="" />
        <div className="overlay" >
          <Container>
            <Grid container justifyContent="center">
              <Grid item xs={12} md={8}>
                {/* <div className="enburns-top"> */}
                  <div className="row">
                    <div className="col-md-8 col-md-offset-2 intro-text">
                    <h1 style={titleStyle}>
                   Gallery
                    </h1>
                    <p>Capturing the vibrant spirit of our school community through a visual journey in our gallery</p>
                    </div>
                  </div>
              
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </header>
    <Gallery />
    <Footer/>
    </>
  )
}

export default GalleryPage;