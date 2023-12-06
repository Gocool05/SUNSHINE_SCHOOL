import { Link } from "@mui/material";
import React from "react";
import { Link as RouterLink } from 'react-router-dom';
export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a href="#Header" className="page-scroll">
          <img className="logo" src="https://res.cloudinary.com/dx78kzenz/image/upload/v1701861675/Logo_sh2q20.png" alt="logo"></img>
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#Ethos" className="page-scroll">
                Ethos
              </a>
            </li>

            <li>
              <a href="#services" className="page-scroll">
                Details
              </a>
            </li>
            <li>
              <a href="#gallery" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="#testimonials"  className="page-scroll">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
