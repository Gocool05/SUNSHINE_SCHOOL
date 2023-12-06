import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const Services = (props) => {
  const initialCardStates = Array(3).fill(false); // Assuming there are three cards initially
  const [expandedCards, setExpandedCards] = useState(initialCardStates);

  const handleViewMore = (index) => {
    setExpandedCards((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title text-center">
          <h2>Detailed Info</h2>
          <p>Montessori Mode of Education and Assessment</p>
        </div>
        <div className="row">
          {/* Nursery to UKG Card */}
          <div className="col-md-4">
            <Card sx={{ boxShadow:'0px 5px 15px rgba(255, 255, 255, 0.4), 0px 10px 15px rgba(255, 255, 255, 0.3), 0px 15px 15px rgba(255, 255, 255, 0.2), 0px 20px 15px rgba(255, 255, 255, 0.1), 0px 25px 15px rgba(255, 255, 255, 0.05)'}}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Nursery to UKG
                </Typography>
                <Typography variant="h6" style={{ textAlign: 'left' }}>
                  When a child steps through our doors, we aim to take them on an exhilarating journey of learning, growth, and discovery, through the Montessori method to an age group of 2+ to 6 years...
                </Typography>
                {expandedCards[0] && (
                  <>
                    <Typography variant="h6" style={{ textAlign: 'left' }}>
                      The Sunshiners are encouraged to be independent, critical thinkers with enquiring minds and a love of learning. Throughout, we emphasize the importance of kindness, consideration, and respect. We maintain high expectations of behavior all the time.
                    </Typography>
                    <Typography variant="h6" style={{ textAlign: 'left' }}>
                      We offer our children many leadership and teamwork opportunities to build their confidence and prepare them for future challenges. A true all-round education can never be confined to the four walls of a classroom. Sunshine pupils have many opportunities to learn in different environments.
                    </Typography>
                    <Typography variant="h6" style={{ textAlign: 'left' }}>
                      The subjects taught during the starting years of their learning journey include English, Mathematics, and Environmental studies.
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      Timings:
                    </Typography>
                    <ul style={{ textAlign: 'left' }}>
                      <li>Toddler - 9.00am to 11.30am (Monday to Friday)</li>
                      <li>Pre-Kg - 9.00am to 12.30pm (Monday to Friday)</li>
                      <li>LKG - 9.00am to 1.30pm (Monday to Friday)</li>
                      <li>UKG - 9.00am to 2.00pm (Monday to Friday)</li>
                    </ul>
                  </>
                )}
                <Button onClick={() => handleViewMore(0)} variant="outlined">
                  {expandedCards[0] ? 'View Less' : 'View More'}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Primary School Card */}
          <div className="col-md-4">
            <Card sx={{ boxShadow:'0px 5px 15px rgba(255, 255, 255, 0.4), 0px 10px 15px rgba(255, 255, 255, 0.3), 0px 15px 15px rgba(255, 255, 255, 0.2), 0px 20px 15px rgba(255, 255, 255, 0.1), 0px 25px 15px rgba(255, 255, 255, 0.05)'}}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Primary School
                </Typography>
                <Typography variant="h6" style={{ textAlign: 'left' }}>
                  Our Primary school programme is based on the CICSE Board. ICSE Primary, typically for learners aged 7 to 11 years, gives a world-class curriculum to develop learner skills and understandings...
                </Typography>
                {expandedCards[1] && (
                  <>
                    <Typography variant="h6" style={{ textAlign: 'left' }}>
                      There are so many opportunities for Sunshine students to follow their passions whether they be on the sporting fields, the pool, the stage, the studio or the great outdoors. With extensive co-curricular and extracurricular programs in place that are included in the curriculum, the difficulty will be in choosing.
                    </Typography>
                    <Typography variant="h6" style={{ textAlign: 'left' }}>
                      All students from Year 7 to Year 15 participate in our extensive sports program both at a House level and interschool competitions. Sport is a compulsory aspect of school life for all students which includes Gymnastics, Squash, Swimming, Table Tennis, Billiards, Chess, Badminton, etc. The students need to choose any two of the available sports as part of the curriculum. The high level of engagement and performance of Sunshine students in a wide variety of sports is a real feature of school life.
                    </Typography>
                    <Typography variant="h6" style={{ textAlign: 'left' }}>
                      Complementing the extensive visual arts curriculum, there are also many opportunities for students to engage with other aspects of the arts including life drawing, pottery, sculpting, Carpentry, Music and photography which are part of the curriculum. With thriving music and performing arts departments, students participate in the ensembles, choirs, bands, orchestras, plays, musicals, and soirees offered at all levels of the School and also learn to play different musical instruments based on their interest, such as Keyboard, Drums, Tabla, Veena, Guitar, etc from which they get to choose.
                    </Typography>
                    <Typography variant="h6" style={{ textAlign: 'left' }}>
                      As our children make their way through the school years, we aim to prepare them for life beyond our walls, teaching them that they can have a positive effect on the world around them.
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      Timings:
                    </Typography>
                    <ul style={{ textAlign: 'left' }}>
                      <li>Grade 1 to 7 - 8.10am to 3.00pm (Monday to Friday)</li>
                    </ul>
                  </>
                )}
                <Button onClick={() => handleViewMore(1)} variant="outlined">
                  {expandedCards[1] ? 'View Less' : 'View More'}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* High School Card */}
          <div className="col-md-4">
            <Card sx={{ boxShadow:'0px 5px 15px rgba(255, 255, 255, 0.4), 0px 10px 15px rgba(255, 255, 255, 0.3), 0px 15px 15px rgba(255, 255, 255, 0.2), 0px 20px 15px rgba(255, 255, 255, 0.1), 0px 25px 15px rgba(255, 255, 255, 0.05)'}}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  High School
                </Typography>
                <Typography variant="h6" style={{ textAlign: 'left' }}>
                  The CISCE curriculum is widely acknowledged by universities and colleges worldwide. Its recognition opens doors to numerous opportunities for higher education, both within India and internationally...
                </Typography>
                {expandedCards[2] && (
                  <>
                    <Typography variant="h6" style={{ textAlign: 'left' }}>
                      The curriculum's emphasis on holistic development and equipping students with the necessary knowledge, skills, and critical thinking abilities makes it highly regarded in academic circles.
                    </Typography>
                    <Typography variant="h6" style={{ textAlign: 'left' }}>
                      The scope and sequence of the CISCE curriculum are thoughtfully planned to ensure a logical progression of learning outcomes and skills across different grade levels. This allows students to build upon their knowledge and develop a deeper understanding of subjects as they advance through the curriculum. The scope and sequence provide a clear roadmap for educators to follow in order to deliver a cohesive and structured education.
                    </Typography>
                    <Typography variant="h6" style={{ textAlign: 'left' }}>
                      The CISCE curriculum embraces interdisciplinary approaches to learning, encouraging students to make connections across different subjects and explore the interrelationships between them. This approach allows students to develop a broader perspective and a deeper understanding of the world around them. By integrating knowledge and skills from various disciplines, students are equipped to tackle complex problems and think critically.
                    </Typography>
                    <Typography variant="h6" style={{ textAlign: 'left' }}>
                      The subjects include English, Mathematics, History, Political science, Geography, Economics, Physics, Chemistry, Biology, second language, Computer science.
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      Timings:
                    </Typography>
                    <ul style={{ textAlign: 'left' }}>
                      <li>8.10am to 3.00pm (Monday to Friday)</li>
                    </ul>
                  </>
                )}
                <Button onClick={() => handleViewMore(2)} variant="outlined">
                  {expandedCards[2] ? 'View Less' : 'View More'}
                </Button>
              </CardContent>
            </Card>
          </div>

        </div>
        
      </div>
    </div>
  );
};
