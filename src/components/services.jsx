import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Image } from "@mui/icons-material";
import { CardMedia } from "@mui/material";

export const Services = (props) => {
  const initialCardStates = Array(3).fill(false);
  const [expandedCards, setExpandedCards] = useState(initialCardStates);

  const initialCardState = Array(3).fill(false);
  const [expandedCard, setExpandedCard] = useState(initialCardState);

  const handleViewMore = (index) => {
    setExpandedCards((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };
  
  const handleViewMoree = (index) => {
    setExpandedCard((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div id="services" className="text-center">
      <div className="container">
      <div className="section-title text-center">
        <h2>Education Details</h2>
          <p>Montessori Mode of Education and Assessment</p>
        </div>
        <div className="row" style={{marginBottom:"5%" }}>
          {/* Nursery to UKG Card */}
          <div className="col-md-4">
            <Card sx={{ boxShadow:'0px 5px 15px rgba(255, 255, 255, 0.4), 0px 10px 15px rgba(255, 255, 255, 0.3), 0px 15px 15px rgba(255, 255, 255, 0.2), 0px 20px 15px rgba(255, 255, 255, 0.1), 0px 25px 15px rgba(255, 255, 255, 0.05)'}}>
              <CardContent>
              <CardMedia
        sx={{ height:'200px',borderRadius:'10px', marginBottom:'10px', border: '1px inset yellow', boxShadow:'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset' }}
        image="https://res.cloudinary.com/dx78kzenz/image/upload/v1704365414/toddler_dcvotp.jpg"
        title="Toddler to UKG"
      />
                <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold' }}>
                 Toddler to UKG 
                </Typography>
                <Typography variant="h6" style={{ textAlign: 'left' }}>
                When a child steps through our doors we aim to take them on an exhilarating journey of learning, growth and discovery, through the Montessori method to an age group of 2+ to 6 years...
                </Typography> 
                {expandedCards[0] && (
                  <>
                    <Typography variant="h6" style={{ textAlign: 'left' }}>
                    The Sunshiners are encouraged to be independent, critical thinkers with enquiring minds and a love of learning. Throughout, we emphasise the importance of kindness, consideration and respect. We maintain high expectations of behaviour all the time.</Typography>
                    <Typography variant="h6" style={{ textAlign: 'left' }}>
                    We offer our children many leadership and teamwork opportunities to build their confidence and prepare them for future challenges. A true all-round education can never be confined to the four walls of a classroom. Sunshine pupils have many opportunities to learn in different environments.</Typography>
                    <Typography variant="h6" style={{ textAlign: 'left' }}>
                    The subjects taught during the starting years of their learning journey includes Practical life, Sensorial, Arithmetic, Culture, and Language. </Typography> 
                    &nbsp;
                    
                    <Typography variant="h5" fontWeight={'bolder'} gutterBottom textTransform={'uppercase'}>Timings:
                    </Typography>
                    <ul style={{ textAlign: 'center' }}>
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
              <CardMedia
        sx={{ height:'200px',borderRadius:'10px', marginBottom:'10px', border: '1px inset yellow', boxShadow:'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset' }}
        image="https://res.cloudinary.com/dx78kzenz/image/upload/v1704459820/ecr2_hvtjnw.jpg"
        title="Primary School"
      />

                <Typography variant="h4" style={{ fontWeight: 'bold' }} gutterBottom>
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
                    &nbsp;
                    <Typography variant="h5" fontWeight={'bolder'} gutterBottom textTransform={'uppercase'}>
                      Timings:
                    </Typography>
                    <ul style={{ textAlign: 'center' }}>
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
              <CardMedia
        sx={{ height:'200px',borderRadius:'10px', marginBottom:'10px', border: '1px inset yellow', boxShadow:'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset' }}
        image="https://res.cloudinary.com/dx78kzenz/image/upload/v1704459820/ecr3_tgqjxd.jpg"
        title="High School"
      />
                <Typography variant="h4" style={{ fontWeight: 'bold' }} gutterBottom>
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
                    &nbsp;
                    <Typography variant="h5" fontWeight={'bolder'} gutterBottom textTransform={'uppercase'}>
                      Timings:
                    </Typography>
                    <ul style={{ textAlign: 'center' }}>
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
        <div className="section-title text-center">
          <h2>Assessment methods </h2>
          <p style={{textAlign:"center"}}>Assessment is intended to assist students to understand their own achievement and progress. Through evaluation, students develop the ability to think and reflect, create, adapt, analyse and make connections in their learning, and above all, enjoy.</p>
        </div>
        <div className="col-md-6">
            <Card sx={{ boxShadow:'0px 5px 15px rgba(255, 255, 255, 0.4), 0px 10px 15px rgba(255, 255, 255, 0.3), 0px 15px 15px rgba(255, 255, 255, 0.2), 0px 20px 15px rgba(255, 255, 255, 0.1), 0px 25px 15px rgba(255, 255, 255, 0.05)'}}>
              <CardContent>
              <CardMedia
        sx={{ height:'200px',borderRadius:'10px', marginBottom:'10px', border: '1px inset yellow', boxShadow:'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset' }}
        image="https://res.cloudinary.com/dx78kzenz/image/upload/v1704460158/ecr7_esnkaf.jpg"
        title="green iguana"
      />
                <Typography variant="h4" style={{ fontWeight: 'bold' }} gutterBottom>
                GRADE 1 to 5
                </Typography>
                <Typography variant="h6" style={{ textAlign: 'left' }}>
                Diagnostic assessments can help benchmark student progress. Assessments will be conducted at the end of the unit, so students can see how far they have come....
                </Typography>
                {expandedCard[0] && (
                  <>
                  &nbsp;
                    <Typography variant="h6" style={{ textAlign: 'left' }}>
                    Diagnostic Assessments:
                    </Typography>
                    &nbsp;
                    <ul style={{ textAlign: 'left' }}>
                      <li>•	Short quizzes</li>
                      <li>•	Journal entries</li>
                      <li>•	Student interviews</li>
                      <li>•	Student reflections</li>
                      <li>•	Classroom discussions</li>
                      <li>•	Graphic organizers </li>
                    </ul>
                    &nbsp;
                    <Typography variant="h6" style={{ textAlign: 'left' }}>
                    Formative assessments include:
                    </Typography>
                    &nbsp;
                    <ul style={{ textAlign: 'left' }}>
                      <li>•	Portfolios</li>
                      <li>•	Group projects</li>
                      <li>•	Progress reports</li>
                      <li>•	Entry and exit tickets</li>
                      <li>•	Virtual classroom tools like Socrative or Kahoot</li>
                      <li>•	Short, regular quizzes</li>
                      <li>•	Project-based learning activities</li>
                    </ul>
                  </>
                )}
                <Button onClick={() => handleViewMoree(0)} variant="outlined">
                  {expandedCard[0] ? 'View Less' : 'View More'}
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="col-md-6">
            <Card sx={{ boxShadow:'0px 5px 15px rgba(255, 255, 255, 0.4), 0px 10px 15px rgba(255, 255, 255, 0.3), 0px 15px 15px rgba(255, 255, 255, 0.2), 0px 20px 15px rgba(255, 255, 255, 0.1), 0px 25px 15px rgba(255, 255, 255, 0.05)'}}>
              <CardContent>
              <CardMedia
        sx={{ height:'200px',borderRadius:'10px', marginBottom:'10px', border: '1px inset yellow', boxShadow:'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset' }}
        image="https://res.cloudinary.com/dx78kzenz/image/upload/v1704460158/ecr6_zotpw3.jpg"
        title="green iguana"
      />
                <Typography variant="h4" style={{ fontWeight: 'bold' }} gutterBottom>
                GRADE 6 and 7
                </Typography>
                <Typography variant="h5" style={{ textAlign: 'left',fontWeight: 'bold' }}>
                Methods include:
                </Typography>
                <Typography variant="h6" style={{ textAlign: 'left' }}>
                As per the guidelines published by ICSE, every school evaluates students’ ...
                </Typography>
                {expandedCard[1] && (
                  <>
                    <Typography variant="h6" style={{ textAlign: 'left' }}>
                    Performance and improvements with the help of Continuous and Comprehensive Evaluation (CCE) through Formative Assessments and Summative Assessments. Mathematics, Science, Social Science, and two language topics contribute towards evaluating students’ performance appropriately. 
                    </Typography>
                    &nbsp;
                    <Typography variant="h6" style={{ textAlign: 'left' }}>
                    According to ICSE rules, school evaluates students’ performance and improvement through Continuous and Comprehensive Evaluation (CCE) through Formative and Summative Assessments. Below are the information about Formative and Summative Assessment in detail.                 
                    </Typography>
                    &nbsp;
                    <Typography variant="h6" style={{ textAlign: 'left' }}>
                    •	Formative Assessment: Formative assessment is based on student participation in quizzes, interviews, visual testing, assignments, practical, oral testing, projects, puzzles, and group activities, among other things.
                     </Typography>
                     &nbsp;
                     <Typography variant="h6" style={{ textAlign: 'left' }}>
                    •	Summative Assessment: The school authorities have decided on a half-yearly assessment schedule, which is rigorously adhered to the ICSE guidelines. In summative assessment, students are assessed using the ICSE Class 6 and 7 curriculums
                     </Typography>
                     &nbsp;
                     <Typography variant="h5" style={{ textAlign: 'left',fontWeight: 'bold' }}>
                     Co-scholastic Areas
                </Typography>
                <Typography variant="h6" style={{ textAlign: 'left' }}>
                Attitude toward school, teachers, peer group, values, aesthetic skills like dance, music, drawing, health and physical education, achievement in co-curricular activities, and participation in competitions are assessed in co-scholastic areas.
                </Typography>
                  </>
                )}
                <Button onClick={() => handleViewMoree(1)} variant="outlined">
                  {expandedCard[1] ? 'View Less' : 'View More'}
                </Button>
              </CardContent>
            </Card>
          </div>
        
      </div>
    </div>
  );
};
