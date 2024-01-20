import React from 'react';

const NewsTicker = ({ newsItems }) => {
  return (
    <div id="news-ticker" className="navbar navbar-default navbar-fixed-top">
      <div className="container" style={{display:"flex"}}>
      <div className='news'>Updates:-</div>
      <marquee behavior="scroll" direction="left" z-index="1">
        {newsItems.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </marquee>
    </div>
    </div>

  );
};

export default NewsTicker;
