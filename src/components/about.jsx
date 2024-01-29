import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="https://res.cloudinary.com/dx78kzenz/image/upload/v1704780531/download_7_oz8ag6.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3 color="black">Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="about-text1">
        <h2>Know more</h2>
          <ul>
            <li>
            Welcome to Sunshine School, where the happiness and well-being of our students are paramount. Our mission is to cultivate an environment where every child feels cherished, nurtured, and empowered to shine brilliantly. Catering to ages 3 through 15, we offer a comprehensive educational journey, guiding each student toward realizing their fullest potential within society's fabric.
            </li>
            <li>At Sunshine, we champion open dialogue between students and educators, fostering an atmosphere where thoughts and ideas flow freely, always rooted in mutual respect. Our daily endeavour is to ignite a passion for learning, unleash creativity, and cultivate global perspectives. From our youngest learners to our 15-year-old scholars, we are committed to nurturing excellence in every facet of life. Join us at Sunshine School, where each day paves the way for a luminous future.</li>
            <li>The milestones of a child's first steps, first words, and first school experience resonate deeply in every parent's heart. At Sunshine School, your child embarks on a transformative journey into the realm of literacy, laying a robust foundation for future successes. Our enriching and enduring educational experience equips your child with the essential skills and competencies to achieve greatness in life.</li>
            <li>Over the past 13 years, the Sunshine Group of Educational Institutions has flourished in stature and maturity, enabling us to harness the unique talents and potentials of every child. Entrusted with academic and personal growth, your child is in the adept hands of our professionally trained educators. The unwavering dedication, patience, and nurturing ethos of our faculty create a home away from home for each student. Since our humble beginnings in July 2010, the Sunshine Group of Educational Institutions, which initially catered to a single child, now welcomes approximately Five Thousand endearing students, ranging from 2.5 to 17 years of age. We steadfastly believe that each child possesses innate talents deserving of expression and recognition.</li>
          </ul>
        </div>
      </div>
      <div className="container">
      <div className="row">
      <div style={{marginTop:"20px"}} className="col-xs-12 col-md-6">
            {" "}
            <img src="https://res.cloudinary.com/dx78kzenz/image/upload/v1706526610/out-0_2_zhjdxn.png" className="img-responsive" alt="" />{" "}
          </div>
      <div className="col-xs-12 col-md-6">
        <div className="about-text1">
        <h2>SUNSHINE TIMELINE</h2>
        <ul>
          <li style={{fontSize:"medium"}}> In 2006, the Sunshine Group of Educational Institutions embarked on its educational journey with just one child at the Velachery campus. Fuelled by a vision to deliver quality education through Montessori methodology, we quickly earned acclaim for our dedication to holistic learning.</li>
          <li style={{fontSize:"medium"}}>Over the years, the steadfast commitment of our founders and educators led to the establishment of four additional schools across Chennai and Tamil Nadu. These institutions emerged as pillars of academic excellence, following the CBSE curriculum, and fostering an environment that prioritized both academic growth and character development.</li>
        </ul>
          <h3>The schools under our umbrella include:</h3>
          <ul>
            <li>Sunshine Montessori Nursery and Primary School, Velachery</li>
            <li>Sunshine Chennai Senior Secondary School, Puzhuthivakkam</li>
            <li>Sunshine SSM Senior Secondary School, Chrompet</li>
            <li>Sunshine Sarada Senior Secondary School, Gopalapuram</li>
            <li>Sunshine Centre of Learning, Madipakkam</li>
            <li>Sunshine Graduate Finishing School, Teynampet</li>
            <li>Sunshine Montessori School, Vettuvankeni</li>
          </ul>
          </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="about-text1">
        <h2>SUNSHINE PUBLIC SCHOOL <span style={{color:"#1976d2" ,fontSize:"22px"}}>@ AKARAI (Upcoming Project)</span></h2>
        <p style={{ fontSize:"large", fontWeight:"500"}}>The journey showcased innovative teaching methods, personalized learning, and a dedication to staying current with educational trends. As Sunshine grew, we adapted curricula to meet evolving student needs, gaining recognition for academic excellence. This expansion underscores our commitment to elevating educational standards and offering a holistic, future-ready education.</p>
        </div>
      </div>
    </div>
  );
};
