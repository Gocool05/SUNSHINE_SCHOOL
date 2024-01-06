import { color } from "@mui/system";
import React from "react";
import { useEffect,useState } from 'react';
import { Link,useNavigate } from "react-router-dom";
export const Navigation = (props) => {
const navigate =useNavigate();
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
          <a href="#Header" className="page-scroll">
          <img className="logo" src="https://res.cloudinary.com/dx78kzenz/image/upload/v1703055509/sunshine_montessori_school_vh708w.png" alt="logo"></img>
          </a>
        </div>

        <div className={`collapse navbar-collapse `} id="bs-example-navbar-collapse-1">
          <ul style={{backgroundColor:"white"}} className="nav navbar-nav navbar-right">
            <li>
              <Link to="/" className="page-scroll" >
                Home
              </Link>
            </li>
            <li>
              <Link to="/ethos" className="page-scroll" >
                Ethos
              </Link>
            </li>

            <li>
              <Link to="/curriculum" className="page-scroll" >
                Curriculum
              </Link>
            </li>
            <li>
              <Link to="/management" className="page-scroll">
              management
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="page-scroll" >
                Gallery
              </Link>
            </li>
            {/* <li>
              <a href="#testimonials"  className="page-scroll" onClick={handleNavItemClick}>
                Testimonials
              </a>
            </li> */}
            <li>
              <Link to="/contactus" className="page-scroll" >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
