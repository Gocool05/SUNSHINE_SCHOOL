import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const useStyles = makeStyles((theme) => ({
  layout: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(2),
    marginLeft:theme.spacing(0),
  },
  layoutChild: {
    width: '100%',
    marginBottom: theme.spacing(3),
  },
}));

export const Features = () => {
  const classes = useStyles();

  const cardsData = [
    {
      title: "VISION",
      image: "https://res.cloudinary.com/dx78kzenz/image/upload/v1704780842/ACTIVITY2_yym19y.jpg",
      content: "Our new school is dedicated to providing a comprehensive education that prepares students for success in a globalized world. We emphasize physical health, cultivate cultural values, encourage students to set personal goals, and promote hands-on learning and understanding.",
    },
    {
      title: "MISSION",
      image: "https://res.cloudinary.com/dx78kzenz/image/upload/v1704780185/download_8_pinptr.jpg",
      content: "Our mission is to empower our students with knowledge, skills, and values that will not only help them succeed academically but also thrive as compassionate and responsible global citizens. We firmly believe in nurturing their innate potential, igniting a lifelong passion for learning, and helping them reach their highest aspirations.",
    },
    {
      title: "EDUCATIONAL PHILOSOPHY",
      image: "https://res.cloudinary.com/dx78kzenz/image/upload/v1704780845/montessori_1_jjtcf9.jpg",
      content: "At Sunshine Montessori School, our educational philosophy is deeply rooted in the principles of the Montessori method, fostering an environment that nurtures the academic and personal growth of each child. We believe in a holistic approach to education that recognizes the uniqueness of every learner and provides a foundation for a lifetime of success. Our goal is not only to impart knowledge but also to instill a lifelong love for learning. Through engaging activities, interactive lessons, and a positive classroom atmosphere, we inspire curiosity and a passion for discovering the world around us. ",
    },
    {
      title: "WHAT MAKES US SO UNIQUE",
      image: "https://res.cloudinary.com/dx78kzenz/image/upload/v1704780954/v4_efnbfr.webp",
      content: "At Sunshine, we believe in open conversations between students and teachers. We encourage everyone to freely share their thoughts and ideas while treating each other with respect. Our daily mission is to spark a love for learning, unlock creativity, and help students think globally From the tiniest learners to our 15-year-old students, we inspire excellence in all aspects of life. Join us at Sunshine School, where every day is a step towards a brighter future. Learning at Sunshine is sequenced and from our early learners through to Year 15, Sunshine students are encouraged to pursue excellence in everything they do.",
    },
  ];

  return (
    <div id="features">
    <div className="container">
    <Container id="Ethos" className={classes.layout} >
      <div className="section-title">
          <h2 style={{textAlign: "center"}} >Vision and Mission</h2>
        </div>
    <Grid container spacing={3}>
      {cardsData.map((card, index) => (
        <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column',boxShadow:'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset' }}>
            <CardMedia
              sx={{ height: 250 }}
              image={card.image}
              title={card.title}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography gutterBottom variant="h3" style={{ fontWeight: 'bold' }} component="div">
                {card.title}
              </Typography>
              <Typography variant="h6" style={{ fontWeight:'bolder', color: 'grey' }} >
                {card.content}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
  </div>
  </div>
  );
};
