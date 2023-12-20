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
      image: "img/updated pics/montessori.jpg",
      content: "Our new school is driven by a strong vision of offering the prestigious CISCE curriculum, which enjoys global recognition, providing our students with a comprehensive and well-rounded education that prepares them to excel in today's interconnected world, as well as the CBSE curriculum, which helps to guide the students in their preparation, make sure that the students are fit and healthy physically, to inculcate cultural values among the students, set their own goals, enhance their potential and gain application-based knowledge and information",
    },
    {
      title: "MISSION",
      image: "img/updated pics/montessori2.jpeg",
      content: "Our mission is to empower our students with knowledge, skills, and values that will not only help them succeed academically but also thrive as compassionate and responsible global citizens. We firmly believe in nurturing their innate potential, igniting a lifelong passion for learning, and helping them reach their highest aspirations.",
    },
    {
      title: "CURRICULAM",
      image: "img/updated pics/montessori (1).jpg",
      content: "The two key versions of the Indian Curriculum are the Central Board of Secondary Education (CBSE) and the Council for the Indian School Certificate Examinations (CISCE) which are offered in many international schools. We at Sunshine have incorporated both of these under one roof, where the students and parents get the option to choose the required curriculum. ",
    },
    {
      title: "WHAT MAKES US SO UNIQUE",
      image: "img/updated pics/v4.webp",
      content: "At Sunshine, we believe in open conversations between students and teachers. We encourage everyone to freely share their thoughts and ideas while treating each other with respect. Our daily mission is to spark a love for learning, unlock creativity, and help students think globally From the tiniest learners to our 15-year-old students, we inspire excellence in all aspects of life. Join us at Sunshine School, where every day is a step towards a brighter future. Learning at Sunshine is sequenced and from our early learners through to Year 15, Sunshine students are encouraged to pursue excellence in everything they do.",
    },
  ];

  return (
    <div className="container">
    <Container id="Ethos" className={classes.layout} >
      <div className="section-title">
          <h2 style={{textAlign: "center"}} >Ethos</h2>
          <p>The ethos reflects its fundamental values, mission, and the overall atmosphere that influences the educational environment</p>
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
  );
};
