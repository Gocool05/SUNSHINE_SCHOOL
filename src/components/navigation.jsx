import { color } from "@mui/system";
import React from "react";
import { useEffect,useState } from 'react';
import { Link, useLocation } from "react-router-dom";
export const Navigation = (props) => {
  // const [isNavOpen, setNavOpen] = useState(false);

  // const handleNavItemClick = () => {
  //   setNavOpen(false); // Close the navbar collapse
  // };

  // useEffect(() => {
  //   // Add event listeners to close the navbar collapse when a link is clicked
  //   const navbarLinks = document.querySelectorAll('.navbar-nav li a.page-scroll');
  //   navbarLinks.forEach((link) => {
  //     link.addEventListener('click', handleNavItemClick);
  //   });

  //   // Remove event listeners when the component is unmounted
  //   return () => {
  //     navbarLinks.forEach((link) => {
  //       link.removeEventListener('click', handleNavItemClick);
  //     });
  //   };
  // }, []);
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page when the component mounts or when the route changes
    window.scrollTo(0, 0);
  }, [location.pathname]); 

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            // onClick={() => setNavOpen(!isNavOpen)}
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          {/* <a href="#Header" > */}
          <img className="logo" src="https://res.cloudinary.com/dx78kzenz/image/upload/v1703055509/sunshine_montessori_school_vh708w.png" alt="logo"></img>
          {/* </a> */}
        </div>

        <div className={`collapse navbar-collapse `} id="bs-example-navbar-collapse-1">
          <ul style={{backgroundColor:"white"}} className="nav navbar-nav navbar-right">
            <li>
              <Link to="/" >
                Home
              </Link>
            </li>
            <li>
              <Link to="/ethos" >
                Ethos
              </Link>
            </li>

            <li>
              <Link to="/curriculum"  >
                Curriculum
              </Link>
            </li>
            <li>
              <Link to="/management" >
              management
              </Link>
            </li>
            <li>
              <Link to="/gallery"  >
                Gallery
              </Link>
            </li>
            {/* <li>
              <a href="#testimonials"  className="page-scroll" onClick={handleNavItemClick}>
                Testimonials
              </a>
            </li> */}
            <li>
              <Link to="/contactus"  >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
