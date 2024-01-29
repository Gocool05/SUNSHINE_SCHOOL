import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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
      <div className="section-title" >
        <h2>CURRICULUM</h2>
          <ul style={{textAlign:"left",fontSize:"large",textAlign:"justify" }}>
            <li>
            At Sunshine, we offer a diverse range of curricular options designed to meet the varied needs of our students and parents. Our approach emphasizes fostering independence, critical thinking, and exploration from an early age.
            </li>
            <li>
            Students are exposed to a comprehensive curriculum that encompasses core academic subjects, while also placing significant emphasis on sports, art, and music. This holistic approach ensures that students receive a multi-faceted education that prepares them for future challenges and opportunities.
            </li>
            <li>
            Through our curriculum, students develop essential skills and knowledge, allowing them to excel academically and cultivate a passion for sports, art, and music. Our goal is to nurture well-rounded individuals who are equipped with the skills, knowledge, and values necessary for success in today's dynamic world.
            </li>
            <li>
            For our youngest learners in Kindergarten, we embrace the renowned <span style={{fontWeight:"bold",color:"#1976d2"}}>MONTESSORI</span> methodology. This approach fosters an environment where children are nurtured to become independent thinkers with curious and inquisitive minds. By encouraging them to explore their surroundings and engage actively with their immediate environment, we lay a robust foundation for lifelong learning.
            </li>
          </ul>
        </div>
        </div>
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
        image="https://res.cloudinary.com/dx78kzenz/image/upload/v1706346685/Todler3_ayeg1r.jpg"
        title="Toddler to UKG"
      />
                <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold' }}>
                 Toddler to UKG 
                </Typography>
                <Typography variant="h6" style={{ textAlign: 'left' }}>
                As children step into our institution, we embark on a captivating journey of learning, growth, and exploration with them, guided by the Montessori Method tailored for ages 2 to 6 years...
                </Typography> 
                {expandedCards[0] && (
                  <>
                    <Typography variant="h6" style={{ textAlign: 'left' }}>
                    Our young Sunshiners are nurtured to become independent, critical thinkers with inquisitive minds and a genuine passion for learning. Throughout their journey, we instill the core values of kindness, consideration, and respect, maintaining consistent expectations for exemplary behaviour.</Typography>
                    <Typography variant="h6" style={{ textAlign: 'left' }}>
                    To foster their holistic development, we provide ample leadership and teamwork opportunities, bolstering their confidence and equipping them for future endeavours. We believe that a comprehensive education extends beyond classroom boundaries; hence, our Sunshine students immerse themselves in diverse learning environments.</Typography>
                    <Typography variant="h6" style={{ textAlign: 'left' }}>
                    During these formative years, our curriculum encompasses subjects such as Practical Life, Sensorial activities, Arithmetic, Cultural studies, and Language development, laying a strong foundation for their educational voyage.</Typography> 
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
        image="https://res.cloudinary.com/dx78kzenz/image/upload/v1704779459/ACTIVITY8_d77myf.jpg"
        title="Primary School"
      />

                <Typography variant="h4" style={{ fontWeight: 'bold' }} gutterBottom>
                  Primary School(Grade 1 To 5)
                </Typography>
                <Typography variant="h6" style={{ textAlign: 'left' }}>
                At Sunshine, we believe in providing a plethora of opportunities for our students to explore and excel. Whether it's on the sports field, in the swimming pool, on the stage, in the art studio, there's something for everyone
                </Typography>
                {expandedCards[1] && (
                  <>
                    <Typography variant="h6" style={{ textAlign: 'left' }}>
                    Our curriculum seamlessly integrates extensive co-curricular and extracurricular activities, making it a delightful challenge for students to choose their passion.
                    </Typography>
                    <Typography variant="h6" style={{ textAlign: 'left' }}>
                    This includes hands-on learning experiences, arts-integrated education, sports-integrated activities, and storytelling-based pedagogies. Such an approach encourages students to explore the interconnectedness of subjects, fostering a holistic understanding of their education journey.
                    </Typography>
                    <Typography variant="h6" style={{ textAlign: 'left' }}>
                    Our assessment strategy encompasses both scholastic and co-scholastic aspects. Through a blend of tests, subject enrichment activities, and behavioural evaluations, we ensure a well-rounded assessment of each student's capabilities and progress.
                    </Typography>
                    {/* <Typography variant="h6" style={{ textAlign: 'left' }}>
                      As our children make their way through the school years, we aim to prepare them for life beyond our walls, teaching them that they can have a positive effect on the world around them.
                    </Typography> */}
                    &nbsp;
                    <Typography variant="h5" fontWeight={'bolder'} gutterBottom textTransform={'uppercase'}>
                    Subject Overview by Grade:
                    </Typography>
                    <ul style={{ textAlign: 'left' }}>
                      <li>• <span style={{ fontWeight: 'bold' }}>Classes 1 to 3:</span> English, Mathematics, Tamil, Hindi, Environmental Studies, Art, Music, Yoga, Dance, Games, General Knowledge, and Computer Awareness.</li>
                      <li>• <span style={{ fontWeight: 'bold' }}>Classes 4 and 5:</span> While the core subjects remain consistent, there's a transition from Environmental Studies to a more specialized focus on Science and Social Studies.</li>
                    </ul>
                    <Typography variant="h6" style={{ textAlign: 'left' }}>
                    At Sunshine, we are committed to providing a nurturing environment where curiosity is celebrated, talents are honed, and every child is empowered to reach their fullest potential. Join us on this exciting educational journey!
                    </Typography>
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
        image="https://res.cloudinary.com/dx78kzenz/image/upload/v1704780021/ACTIVITY11_q5x3s0.jpg"
        title="High School"
      />
                <Typography variant="h4" style={{ fontWeight: 'bold' }} gutterBottom>
                  Middle School(Grade 6 TO 8) 
                </Typography>
                <Typography variant="h6" style={{ textAlign: 'left' }}>
                At Sunshine,The curriculum aims to equip students with essential skills, knowledge, and competitive readiness, ensuring a well-rounded education tailored for future success....
                </Typography>
                {expandedCards[2] && (
                  <>
                    <Typography variant="h6" style={{ textAlign: 'left' }}>
                    <span style={{ fontWeight: 'bold' }}>Holistic Development:</span> Emphasizing critical thinking, skills, and knowledge, the curriculum prepares students for higher education and real-world challenges.
                    </Typography>
                    <Typography variant="h6" style={{ textAlign: 'left' }}>
                    <span style={{ fontWeight: 'bold' }}>Structured Progression:</span> A meticulously planned scope and sequence ensure logical learning outcomes, facilitating a seamless advancement in knowledge and skills.
                    </Typography>
                    <Typography variant="h6" style={{ textAlign: 'left' }}>
                    <span style={{ fontWeight: 'bold' }}>Interdisciplinary Learning:</span> Encouraging connections across subjects, students gain a broader perspective and are primed to address complex challenges. Subjects encompass English, Mathematics, History, Political Science, Geography, Economics, Physics, Chemistry, Biology, Second Language, and Computer Science.
                    </Typography>
                    &nbsp;
                    <Typography variant="h5" fontWeight={'bolder'} gutterBottom textTransform={'uppercase'}>
                      Timings:
                    </Typography>
                    <ul style={{ textAlign: 'center' }}>
                      <li><span style={{ fontWeight: 'bold' }}>Grade 1 to 7</span> – 8.10am to 2.30pm (Monday to Friday)</li>
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
          <p style={{textAlign:"center"}}>Assessment at Sunshine School serves as a dynamic tool for continuous improvement, benefiting students, educators, and the entire learning ecosystem.</p>
        </div>
        <div className="section-title" >
          <ul style={{textAlign:"left",fontSize:"large",textAlign:"justify" }}>
            <li>
            The primary objective is 'assessment for learning,' enabling refinement of teaching methodologies and fostering an environment conducive to student growth and development. Assessments empower students to recognize their progress, cultivate critical thinking, reflection, creativity, and a genuine passion for learning.
            </li>
            <li>
            Our 360-degree Holistic Progress Card provides a comprehensive view of each student's journey, capturing insights across cognitive, affective, socio-emotional, and psychomotor domains.
            </li>
          </ul>  
        </div>
        <div className="row"> 
        <div className="col-md-6">
            <Card sx={{ boxShadow:'0px 5px 15px rgba(255, 255, 255, 0.4), 0px 10px 15px rgba(255, 255, 255, 0.3), 0px 15px 15px rgba(255, 255, 255, 0.2), 0px 20px 15px rgba(255, 255, 255, 0.1), 0px 25px 15px rgba(255, 255, 255, 0.05)'}}>
              <CardContent>
              <CardMedia
        sx={{ height:'200px',borderRadius:'10px', marginBottom:'10px', border: '1px inset yellow', boxShadow:'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset' }}
        image="https://res.cloudinary.com/dx78kzenz/image/upload/v1704780186/download_5_bbtoqj.jpg"
        title="grade 1 to 5"
      />
                <Typography variant="h4" style={{ fontWeight: 'bold' }} gutterBottom>
                GRADE 1 to 5
                </Typography>
                <Typography variant="h6" style={{ textAlign: 'left' }}>
                Assessments will be conducted at the end of the unit, so students can see how far they have come....
                </Typography>
                {expandedCard[0] && (
                  <>
                  &nbsp;
                    <Typography variant="h6" style={{ textAlign: 'left' }}>
                    <span style={{ fontWeight: 'bold' }}>Diagnostic Assessments:</span> Benchmarked to gauge student progress, featuring:
                    </Typography>
                    &nbsp;
                    <ul style={{ textAlign: 'left' }}>
                      <li>•	Short quizzes</li>
                      <li>•	Journal entries</li>
                      <li>•	Student interviews & reflections</li>
                      <li>•	Classroom discussions</li>
                      <li>•	Graphic organizers (e.g., mind maps, KWL charts) </li>
                    </ul>
                    &nbsp;
                    <Typography variant="h6" style={{ textAlign: 'left' }}>
                    <span style={{ fontWeight: 'bold' }}>Formative Assessments:</span> Designed for ongoing feedback and growth, encompassing
                    </Typography>
                    &nbsp;
                    <ul style={{ textAlign: 'left' }}>
                      <li>•	Group projects</li>
                      <li>•	Progress reports</li>
                      <li>•	Entry / Exit tickets</li>
                      <li>•	Virtual classroom tools</li>
                      <li>•	Regular quizzes</li>
                      <li>•	Project-based activities</li>
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
        image="https://res.cloudinary.com/dx78kzenz/image/upload/v1704780187/download_yyrsha.webp"
        title="Grade 6 and 7"
      />
                <Typography variant="h4" style={{ fontWeight: 'bold' }} gutterBottom>
                GRADE 6 and 7
                </Typography>
                <Typography variant="h6" style={{ textAlign: 'left' }}>
                <span style={{ fontWeight: 'bold' }}>Formative Assessment:</span> Emphasizes student engagement via quizzes, assignments, practical tasks, group activities, and more.
                </Typography>
                {expandedCard[1] && (
                  <>
                    <Typography variant="h6" style={{ textAlign: 'left' }}>
                    <span style={{ fontWeight: 'bold' }}>Summative Assessment:</span> This evaluates students' proficiency in core subjects like Mathematics, Science, Social Science, and languages.
                    </Typography>
                    &nbsp;
                    <Typography variant="h6" style={{ textAlign: 'left' }}>
                    <span style={{ fontWeight: 'bold' }}>Beyond academics,</span> CCA evaluates student's holistic development, encompassing
                    </Typography>
                    <ul style={{ textAlign: 'left' }}>
                      <li>•	Attitude towards school, peers, and educators</li>
                      <li>•	Aesthetic skills (dance, music, drawing)</li>
                      <li>•	Health & Physical Education</li>
                      <li>•	Co-curricular achievements & competition participation</li>
                    </ul>
                    &nbsp;
                <Typography variant="h6" style={{ textAlign: 'left' }}>
                At Sunshine School,Our assessment methodologies are tailored to nurture well-rounded individuals, fostering growth, reflection, and lifelong learning.
                </Typography>
                  </>
                )}
                <Button onClick={() => handleViewMoree(1)} variant="outlined">
                  {expandedCard[1] ? 'View Less' : 'View More'}
                </Button>
              </CardContent>
            </Card>
            <div style={{marginBottom:"50px" }}></div>
          </div>
          </div>
          <div className="container"  >
                  <div className="section-title"  >
              <h2 >SPORTS INTEGRATED INTO CURRICULUM – EMBRACING EXCELLENCE </h2>
                <ul style={{textAlign:"left",fontSize:"large",textAlign:"justify" }}>
                  <li>
                  At Sunshine School, sports aren't just an extracurricular activity; they're an integral component of our comprehensive curriculum. From Year 7 to Year 15, every student is immersed in our expansive sports program, participating fervently in both intra-house competitions and interschool events.
                  </li>
                  <div className="col-xs-12 col-md-6">
                  {" "}
                  <img src="https://res.cloudinary.com/dx78kzenz/image/upload/v1706520506/sports_day_in_m_28dc58a5-83bc-44e4-8496-aa248a0317f1_ngcbjk.png" className="img-responsives" alt="" />{" "}
                </div>
                  <li>
                  We believe in offering a diverse range of sporting avenues to cater to varied interests and talents. Our curriculum encompasses sports such as Gymnastics, Squash, Table Tennis, Billiards, Chess, Badminton, Basketball, Athletics, Shooting, Archery, Football, and Cricket. Recognizing the importance of choice and specialization, each student selects any two sports from this array, ensuring a personalized and engaging sports journey.
                  </li>
                  <li>
                  Nestled within our campus is a sprawling sports ground, meticulously designed to accommodate a plethora of sporting activities. Whether it's the thrill of football, the precision of cricket, or the agility of track and field events, our facilities cater to all. This expansive arena not only serves as a training ground but also as a vibrant venue for hosting exhilarating sports meets and events.
                  </li>
                  <li>
                  The active engagement and stellar performance of Sunshine students in various sports underscore our commitment to holistic development. Through rigorous training, healthy competition, and state-of-the-art facilities, we strive to instil values of teamwork, discipline, resilience, and sportsmanship in our students
                  </li>
                  <li>
                  In essence, the well-equipped sports infrastructure and dynamic programs at Sunshine School epitomize our dedication to fostering holistic development, where sports play a pivotal role in shaping confident, healthy, and well-rounded individuals. Join us in celebrating the spirit of sportsmanship and excellence!
                  </li>
                </ul>
              </div>
        </div>
        <div className="container"  >
                  <div className="section-title"  >
              <h2 >MUSIC AND ART IN THE SUNSHINE SCHOOL CURRICULUM  </h2>
              <div className="col-xs-12 col-md-6">
                  {" "}
                  <img src="https://res.cloudinary.com/dx78kzenz/image/upload/v1706520506/students_playin_49d4c9fb-bc28-4c37-9663-afea55dfe630_ps3opc.png" className="img-responsives" alt="" />{" "}
                </div>
                <ul style={{textAlign:"left",fontSize:"large",textAlign:"justify" }}>
                  <li>
                  At Sunshine School, we embrace a comprehensive approach to arts education, intertwining both visual and performing arts seamlessly.
                  </li>
                  
                  <li>
                  Beyond traditional visual arts like painting and sculpting, students immerse themselves in life drawing, pottery, carpentry, photography, and music.
                  </li>
                  <li>
                  With the backing of a distinguished Music Academy, our institution resonates with musical vibrancy, encompassing ensembles, choirs, bands, orchestras, plays, and captivating musicals.
                  </li>
                  <li>
                  Students are encouraged to explore various musical avenues, mastering instruments such as Keyboard, Drums, Tabla, Veena, Guitar, and Violin. They select one instrument, making it an essential component of their Art Education journey.
                  </li>
                  <li>
                  Beyond artistic and musical skills, we equip our students with values and insights to make meaningful contributions to society. Our holistic approach ensures students are ready to navigate and positively influence the world around them.
                  </li>
                </ul>
              </div>
        </div>
        <div className="container"  >
                  <div className="section-title"  >
              <h2 >ROBOTICS CURRICULUM (GRADES 6 TO 8)  </h2>
              <div className="col-xs-12 col-md-6">
                  {" "}
                  <img src="https://res.cloudinary.com/dx78kzenz/image/upload/v1706526779/out-0_1_edfqqy.png" className="img-responsives" alt="" />{" "}
                </div>
                <ul style={{textAlign:"left",fontSize:"large",textAlign:"justify" }}>
                  <li>
                  At Sunshine School, we recognize the transformative potential of Robotics as an interdisciplinary field shaping the future.
                  </li>
                  
                  <li>
                  Robotics encompasses the design, construction, and operation of robots, integrating various specialized fields. It's more than just building; it's about innovation, problem-solving, and preparing students for real-world challenges.
                  </li>
                  <li>
                  Engaging STEAM Education: Robotics captivates students, making STEAM subjects more relatable and exciting.
                  </li>
                  <li>
                  21st-Century Skills: Through hands-on robotics projects, students cultivate creativity, collaboration, communication, and innovation.
                  </li>
                  <li>
                  Beyond artistic and musical skills, we equip our students with values and insights to make meaningful contributions to society. Our holistic approach ensures students are ready to navigate and positively influence the world around them.
                  </li>
                  <li>
                  Practical Learning: Robotics fosters practical understanding of STEAM concepts, promoting experimentation and exploration.
                  </li>
                </ul>
              </div>
              <Typography variant="h3" style={{ textAlign: 'left',fontWeight: 'bold', }}>
              Advantages of learning Robotics:
                    </Typography>
                    <ul style={{ textAlign: 'left',fontWeight: '500', }} className="section-title">
                      <div className="col-xs-12 col-md-6" style={{marginTop:'10px', marginRight:'30px'}}>
                  {" "}
                  <img src="https://res.cloudinary.com/dx78kzenz/image/upload/v1706520514/robotics_curric_b3da8688-1894-463e-a830-4011cf394e60_joytx6.png" className="img-responsives" alt="" />{" "}
                </div>
                      <li>	Logical Thinking & Problem Solving</li>
                      <li>	Creativity & Innovation</li>
                      <li>	Collaboration & Communication Skills</li>
                      <li>	Practical STEAM Application</li>
                      <li>	Resilience & Perseverance</li>
                      <li>	Future Job Market Readiness</li>
                      <li>	Digital Skills Confidence</li>
                      <li>	Enhanced Problem-Solving Abilities</li>
                      <li>	Practical Application of Science & Math</li>
                      <li>	Encouragement for Innovation</li>
                      <li>	Overcoming Challenges & Failure</li>
                      <p>	 Sunshine School is delighted to partner with Singapore-based WEFAA Robotics, enhancing our curriculum with expert insights and practical experiences. This collaboration ensures our students gain valuable robotics knowledge, empowering them to navigate a technology-driven future confidently. Join us in embracing the exciting world of robotics!</p>
                    </ul>
        </div>
      </div>
    </div>
  );
};
