import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Ethos from '../Pages/Ethos';
import Curriculum from '../Pages/Curriculum';
import GalleryPage from '../Pages/galleryPage';
import Management from '../Pages/Management';
import ContactUs from '../Pages/ContactUs';
import { Footer } from '../components/footer';

const AllRoute = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ethos' element={<Ethos />} />
          <Route path='/curriculum' element={<Curriculum />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/management' element={<Management />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/footer' element={<Footer />} />
        </Routes>
      </Router>
    </>
  );
};

export default AllRoute;
