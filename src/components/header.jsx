import React from "react";
import { Container, Grid, Button } from '@mui/material';
export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <video className="video-background" autoPlay muted loop>
          <source src="../img/bgvid4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
          <Container>
            <Grid container justifyContent="center">
              <Grid item xs={12} md={8}>
                {/* <div className="enburns-top"> */}
                  <div className="row">
                    <div className="col-md-8 col-md-offset-2 intro-text">
                    <h1>
                   {props.data ? props.data.title : "Loading"}
                   <span></span>
                    </h1>
                     {/* <p>{props.data ? props.data.paragraph : "Loading"}</p> */}
                      <Button
                        href="#about"
                        className="btn btn-custom btn-lg page-scroll"
                        variant="contained"
                        size="large"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                {/* </div> */}
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </header>
  
  );
};
