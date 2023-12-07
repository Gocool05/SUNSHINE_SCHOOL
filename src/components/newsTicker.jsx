import React from 'react';

const NewsTicker = ({ newsItems }) => {
  return (
    <div id="news-ticker" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
      <marquee behavior="scroll" direction="left">
        <span>Latest News: </span>
        {newsItems.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </marquee>
    </div>
    </div>

  );
};

export default NewsTicker;
