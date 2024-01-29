import React from "react";
import { useTheme } from '@mui/material/styles';
import { flexbox } from "@mui/system";

export const Team = (props) => {
  const theme = useTheme();

  return (
    <div id="team" style={{ textAlign: 'center' }}>
      <div style={{ container: 'container' }}>
        <div style={{ columnWidth: '8', columnOffset: '2', textAlign: 'center' }}>
          <h2>Beloved higher officials</h2>
          <p style={{fontWeight:"bold" }} >
            The DIRECTOR and CORRESPONDENT of Sunshine
          </p>
        </div>
        <div id="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} style={{ width: '100%', marginBottom: '20px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  <div style={{ flex: '1', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img className="team-img" src={d.img} alt="..."  />
                    <div style={{ textAlign: 'center' }}>
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                  {/* Left side (Text) */}
                  <div style={{ flex: '2', fontWeight: 'bold',padding: '10px' }}>
                    <div style={{ textAlign: 'left',padding:"0%",marginTop:'20px' }}>
                      <p className="team-text">{d.text}</p>
                    </div>
                  </div>
                  {/* Right side (Image, Name, Job) */}
                </div>
              </div>
            ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
