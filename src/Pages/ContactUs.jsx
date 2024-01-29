import {React, useEffect, useState} from 'react'
import { Contact } from '../components/contact'
import { Navigation } from '../components/navigation'
import JsonData from '../data/data.json';
import NewsTicker from '../components/newsTicker';
import SmoothScroll from "smooth-scroll";
import { Container, Grid } from '@material-ui/core';
// import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
const ContactUs = () => {
  const [landingPageData, setLandingPageData] = useState({});
  
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
  });
  
  const latestNews = ['Contact Number: +91 63694 92855 / Email Id: sunshinemontessoriicseschool@gmail.com'];

  const titleStyle = {
    fontSize: '6vw',
  };
  
  return (
    
    <>
    <NewsTicker newsItems={latestNews}/>
    <Navigation />
    <header id="header">
      <div className="intro">
        <img className='header-image' src="https://res.cloudinary.com/dx78kzenz/image/upload/v1703075169/m3_drnsbg.jpg" alt="" />
        <div className="overlay">
          <Container>
            <Grid container justifyContent="center">
              <Grid item xs={12} md={8}>
                {/* <div className="enburns-top"> */}
                  <div className="row">
                    <div className="col-md-8 col-md-offset-2 intro-text">
                    <h1 style={titleStyle} >
                   Contact Us
                    </h1>
                    </div>
                  </div>
              
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </header>
    {/* <div style={{ width: '100vw', height: '100vh' }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div> */}
    <Contact data={landingPageData.Contact}/>
    
    </>
  )
}

export default ContactUs