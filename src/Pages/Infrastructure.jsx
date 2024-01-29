import React from 'react'
import { Gallery } from '../components/gallery';
import { Navigation } from '../components/navigation';
import NewsTicker from '../components/newsTicker';
import SmoothScroll from "smooth-scroll";
import { Footer } from '../components/footer';
import { Container, Grid } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { CardMedia } from "@mui/material";
const Infrastructure = () => {
    const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        speedAsDuration: true,
      });
      
      const latestNews = ['Capturing the vibrant spirit of our school community through a visual journey in our gallery!'];
    
      const titleStyle = {
        fontSize: '6vw',
      };


  return (
    <>
    <NewsTicker newsItems={latestNews}/>
    <Navigation/>
    <header id="header">
      <div className="intro" >
        <img className='header-image'  src="https://res.cloudinary.com/dx78kzenz/image/upload/v1706532968/RAG_1313_xtgb27.jpg" alt="" />
        <div className="overlay" >
          <Container>
            <Grid container justifyContent="center">
              <Grid item xs={12} md={8}>
                  <div className="row">
                    <div className="col-md-8 col-md-offset-2 intro-text">
                    <h1 style={titleStyle}><span style={{color: 'white', fontSize:'4vw'}}>Infrastructure</span>
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
    <div id="services" className="text-center">
      <div className="container">
      <div className="section-title" >
    <h2>Sunshine Infrastructure</h2>
    <div className="col-md-6">
            <Card className="card-infra" sx={{ boxShadow:'0px 5px 15px rgba(255, 255, 255, 0.4), 0px 10px 15px rgba(255, 255, 255, 0.3), 0px 15px 15px rgba(255, 255, 255, 0.2), 0px 20px 15px rgba(255, 255, 255, 0.1), 0px 25px 15px rgba(255, 255, 255, 0.05)'}}>
              <CardContent>
              <CardMedia
        sx={{ height:'200px',borderRadius:'10px', marginBottom:'10px', border: '1px inset yellow', boxShadow:'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset' }}
        image="https://res.cloudinary.com/dx78kzenz/image/upload/v1706521937/RAG_1317_zl84sb.jpg"
        title="Grade 6 and 7"
      />
                <Typography variant="h4" style={{ fontWeight: 'bold' }} gutterBottom>
                CLASSROOMS
                </Typography>
                <Typography variant="h6" style={{ textAlign: 'left' }}>
                At Sunshine School's Akarai campus, classrooms prioritize student comfort and modern learning. Each room is air-conditioned, fostering a conducive environment. Additionally, digital boards facilitate interactive and engaging lessons.
                </Typography>
               
              </CardContent>
            </Card>
            <div style={{marginBottom:"50px" }}></div>
          </div>
    <div className="col-md-6">
            <Card  className="card-infra" sx={{ boxShadow:'0px 5px 15px rgba(255, 255, 255, 0.4), 0px 10px 15px rgba(255, 255, 255, 0.3), 0px 15px 15px rgba(255, 255, 255, 0.2), 0px 20px 15px rgba(255, 255, 255, 0.1), 0px 25px 15px rgba(255, 255, 255, 0.05)'}}>
              <CardContent>
              <CardMedia
        sx={{ height:'200px',borderRadius:'10px', marginBottom:'10px', border: '1px inset yellow', boxShadow:'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset' }}
        image="https://res.cloudinary.com/dx78kzenz/image/upload/v1706531040/libraryy_d228s5.jpg"
        title="Grade 6 and 7"
      />
                <Typography variant="h4" style={{ fontWeight: 'bold' }} gutterBottom>
                LIBRARY
                </Typography>
                <Typography variant="h6" style={{ textAlign: 'left' }}>
                Our library stands as a vibrant hub for knowledge acquisition. Beyond mere displays, it offers a rich collection of books, documents, and multimedia resources. Recognizing the enduring value of books, we ensure easy access to a plethora of materials beneficial for research and project work. The serene and well-ventilated space also integrates digital devices, enabling students to tap into e-content seamlessly.
                </Typography>
               
              </CardContent>
            </Card>
            <div style={{marginBottom:"50px" }}></div>
          </div>
          <div className="col-md-6">
            <Card  className="card-infra" sx={{ boxShadow:'0px 5px 15px rgba(255, 255, 255, 0.4), 0px 10px 15px rgba(255, 255, 255, 0.3), 0px 15px 15px rgba(255, 255, 255, 0.2), 0px 20px 15px rgba(255, 255, 255, 0.1), 0px 25px 15px rgba(255, 255, 255, 0.05)'}}>
              <CardContent>
              <CardMedia
        sx={{ height:'200px',borderRadius:'10px', marginBottom:'10px', border: '1px inset yellow', boxShadow:'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset' }}
        image="https://res.cloudinary.com/dx78kzenz/image/upload/v1706531041/stemmclean1_urim0z.jpg"
        title="Grade 6 and 7"
      />
                <Typography variant="h4" style={{ fontWeight: 'bold' }} gutterBottom>
                LABORATORIES
                </Typography>
                <Typography variant="h6" style={{ textAlign: 'left' }}>
                Our labs serve as catalysts for practical learning, fostering essential skills such as:
                <span style={{fontWeight:"bold"}}>Confidence-building,
                Hands-on expertise,
                Operational proficiency,
                Observational acumen,
                Application of theoretical knowledge,
                Cultivation of a scientific mindset.</span>
                Sunshine School boasts specialized labs in Computer Science, Biology, Chemistry, Physics, Mathematics, and English, ensuring a comprehensive experiential learning journey.

                </Typography>
               
              </CardContent>
            </Card>
            <div style={{marginBottom:"50px" }}></div>
          </div>
    <div className="col-md-6">
            <Card  className="card-infra" sx={{ boxShadow:'0px 5px 15px rgba(255, 255, 255, 0.4), 0px 10px 15px rgba(255, 255, 255, 0.3), 0px 15px 15px rgba(255, 255, 255, 0.2), 0px 20px 15px rgba(255, 255, 255, 0.1), 0px 25px 15px rgba(255, 255, 255, 0.05)'}}>
              <CardContent>
              <CardMedia
        sx={{ height:'200px',borderRadius:'10px', marginBottom:'10px', border: '1px inset yellow', boxShadow:'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset' }}
        image="https://res.cloudinary.com/dx78kzenz/image/upload/v1706523391/bike-parking-is-sexy-1-1499803490_vorsoo.jpg"
        title="Grade 6 and 7"
      />
                <Typography variant="h4" style={{ fontWeight: 'bold' }} gutterBottom>
                PARKING FACILITIES 
                </Typography>
                <Typography variant="h6" style={{ textAlign: 'left' }}>
                Understanding the importance of accessibility and convenience, Sunshine offers ample parking facilities. Our spacious parking lots cater to school transport vehicles and provide parents with a hassle-free experience during student drop-off and pick-up times.
                </Typography>
              </CardContent>
            </Card>
            <div style={{marginBottom:"50px" }}></div>
          </div>
          <h2>
          MULTIPURPOSE AUDITORIUM AT SUNSHINE SCHOOL 
          </h2>
          <div className="container">
      <div className="row">
      <div style={{marginTop:"20px"}} className="col-xs-12 col-md-6">
            {" "}
            <img src="https://res.cloudinary.com/dx78kzenz/image/upload/v1706523055/Sanborn_Regional_High_School_Auditorium_and_Performing_Arts_Center_cqnwqr.webp" className="img-responsive" alt="" />{" "}
          </div>
      <div className="col-xs-12 col-md-6">
        <div className="about-text1">
          <h4 style={{textAlign:"left",marginTop:"30px",marginBottom:"20px"}}>Nestled within our expansive campus, Sunshine School boasts a state-of-the-art multipurpose Auditorium designed to facilitate a myriad of activities. This versatile space serves as the epicentre for:</h4>
          <ul style={{textAlign:"left",lineHeight:"15px"}}>
            <li>Workshops & Seminars</li>
            <li>Exhibitions & Quiz Competitions</li>
            <li>Cultural Events: Extempore, Debates, Dramatics, Musicals</li>
            <li>Yoga & Meditation Sessions</li>
            <li>Indoor Games & Recreational Activities</li>
          </ul>
          <h4 style={{textAlign:"left",marginBottom:"20px"}}>Recognizing the pivotal role of these activities in fostering students' self-confidence and holistic development, our auditorium is meticulously equipped. It features:</h4>
          <ul style={{textAlign:"left",lineHeight:"15px"}}>
            <li>Cutting-edge audio-visual technology</li>
            <li>Centralized air-conditioning for optimal comfort</li>
            <li>Advanced amenities to seamlessly accommodate co-curricular endeavours</li>
          </ul>
          </div>
          </div>
        </div>
      </div>
      <div style={{marginBottom:"50px" }}></div>
          </div>
          </div>
          </div>
    <Footer/>
    </>
  )
}

export default Infrastructure