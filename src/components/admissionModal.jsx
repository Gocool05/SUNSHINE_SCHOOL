import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useLocation } from "react-router-dom";
const AdmissionsModal = ({ open, onClose }) => {

  const location = useLocation();
  return (
    <Modal open={open} onClose={onClose} >
    <Box
    className="admission-modal"
      sx={{
        display: 'flex',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        p: 4,
      }}
    >
      <img
        src="https://res.cloudinary.com/dx78kzenz/image/upload/v1706353092/School_lt4pze.jpg"
        alt="Admissions Open"
        className="admission-image"
        style={{ height: 'auto' ,border:'4px double #1976d2', borderRadius: 20,flex:1}}
      />
      <Box className="admission-text" sx={{ paddingLeft: 2, overflowY: 'auto' }} style={{flex:1}}>
        <Typography variant="h4" style={{ fontWeight: 'bold',color:'black',marginBottom: 10 }}>
          ADMISSIONS OPEN FOR ACADEMIC YEAR 2024-25
        </Typography>
        <Typography variant="h6" mt={2} sx={{ color:'black' }}>
        <span style={{ fontWeight: 'bold' }}>Address: </span> #61, 1st Avenue, 1st Cross Street, Vettuvankeni, Chennai 600115
        </Typography>
        <Typography variant="h6" mt={2} sx={{ color:'black' }}>
        <span style={{ fontWeight: 'bold' }}>E-Mail: </span>sunshinemontessoriicseschool@gmail.com
        </Typography>
        <Typography variant="h6" mt={2} sx={{ color:'black' }}>
        <span style={{ fontWeight: 'bold' }}> Contact: </span>6369492855
        </Typography>
        <Button
        variant="contained"
        style={{ marginTop: 20,backgroundColor: '#1976d2', color: 'white' }}
        component={Link} to="/contactus"
        size="large" >Contact Us</Button>
      </Box>
    </Box>
  </Modal>
  );
};

export default AdmissionsModal;