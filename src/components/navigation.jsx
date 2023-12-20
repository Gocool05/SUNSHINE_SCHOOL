import { color } from "@mui/system";
import React from "react";
import { useEffect,useState } from 'react';

export const Navigation = (props) => {

  const [isNavOpen, setNavOpen] = useState(false);

  const handleNavItemClick = () => {
    setNavOpen(false); // Close the navbar collapse
  };

  useEffect(() => {
    // Add event listeners to close the navbar collapse when a link is clicked
    const navbarLinks = document.querySelectorAll('.navbar-nav li a.page-scroll');
    navbarLinks.forEach((link) => {
      link.addEventListener('click', handleNavItemClick);
    });

    // Remove event listeners when the component is unmounted
    return () => {
      navbarLinks.forEach((link) => {
        link.removeEventListener('click', handleNavItemClick);
      });
    };
  }, []);


  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            onClick={() => setNavOpen(!isNavOpen)}
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

        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="bs-example-navbar-collapse-1">
          <ul style={{backgroundColor:"white"}} className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll" onClick={handleNavItemClick}>
                About
              </a>
            </li>
            <li>
              <a href="#Ethos" className="page-scroll" onClick={handleNavItemClick}>
                Ethos
              </a>
            </li>

            <li>
              <a href="#services" className="page-scroll" onClick={handleNavItemClick}>
                Details
              </a>
            </li>
            <li>
              <a href="#gallery" className="page-scroll" onClick={handleNavItemClick}>
                Gallery
              </a>
            </li>
            <li>
              <a href="#testimonials"  className="page-scroll" onClick={handleNavItemClick}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll" onClick={handleNavItemClick}>
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll" onClick={handleNavItemClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
