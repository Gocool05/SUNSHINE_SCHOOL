
import React, { useState } from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Gallery.css';
export const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (images, index) => {
    setModalImages(images);
    setCurrentImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const slickSettings = {
    dots: true,
    infinite: true,
    speed:1,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const events = [
    {
      title: 'Annual Day',
      images: [
        { original: 'https://res.cloudinary.com/dx78kzenz/image/upload/v1703075169/m2_ttg6bj.jpg', thumbnail: 'https://res.cloudinary.com/dx78kzenz/image/upload/v1703075169/m2_ttg6bj.jpg' },
        { original: 'https://picsum.photos/800/400?random=2', thumbnail: 'https://picsum.photos/800/400?random=2' },
        { original: 'https://picsum.photos/800/400?random=3', thumbnail: 'https://picsum.photos/800/400?random=3' },
      ],
    },
    {
      title: 'Play Time',
      images: [
        { original: 'https://res.cloudinary.com/dx78kzenz/image/upload/v1703075169/m6_pex6rr.jpg', thumbnail: 'https://res.cloudinary.com/dx78kzenz/image/upload/v1703075169/m6_pex6rr.jpg' },
        { original: 'https://picsum.photos/800/400?random=5', thumbnail: 'https://picsum.photos/800/400?random=5' },
        { original: 'https://picsum.photos/800/400?random=6', thumbnail: 'https://picsum.photos/800/400?random=6' },
      ],
    },
    {
      title: 'Fun Activities',
      images: [
        { original: 'https://res.cloudinary.com/dx78kzenz/image/upload/v1703075171/m1_qc29mi.jpg', thumbnail: 'https://res.cloudinary.com/dx78kzenz/image/upload/v1703075171/m1_qc29mi.jpg' },
        { original: 'https://picsum.photos/800/400?random=8', thumbnail: 'https://picsum.photos/800/400?random=8' },
        { original: 'https://picsum.photos/800/400?random=9', thumbnail: 'https://picsum.photos/800/400?random=9' },
      ],
    },
    {
      title: 'Republic Day',
      images: [
        { original: 'https://res.cloudinary.com/dx78kzenz/image/upload/v1703075169/m3_drnsbg.jpg', thumbnail: 'https://res.cloudinary.com/dx78kzenz/image/upload/v1703075169/m3_drnsbg.jpg' },
        { original: 'https://picsum.photos/800/400?random=11', thumbnail: 'https://picsum.photos/800/400?random=11' },
        { original: 'https://picsum.photos/800/400?random=12', thumbnail: 'https://picsum.photos/800/400?random=12' },
      ],
    },
    {
      title: 'Red Day',
      images: [
        { original: 'https://res.cloudinary.com/dx78kzenz/image/upload/v1703075169/m4_ugmemt.jpg', thumbnail: 'https://res.cloudinary.com/dx78kzenz/image/upload/v1703075169/m4_ugmemt.jpg' },
        { original: 'https://picsum.photos/800/400?random=14', thumbnail: 'https://picsum.photos/800/400?random=14' },
        { original: 'https://picsum.photos/800/400?random=15', thumbnail: 'https://picsum.photos/800/400?random=15' },
      ],
    },
    {
      title: 'Pongal Celebration',
      images: [
        { original: 'https://res.cloudinary.com/dx78kzenz/image/upload/v1703075169/m5_bdkoiz.jpg', thumbnail: 'https://res.cloudinary.com/dx78kzenz/image/upload/v1703075169/m5_bdkoiz.jpg' },
        { original: 'https://picsum.photos/800/400?random=18', thumbnail: 'https://picsum.photos/800/400?random=18' },
        { original: 'https://picsum.photos/800/400?random=19', thumbnail: 'https://picsum.photos/800/400?random=19' },
      ],
    },
  
    
    
    // Add more events here as needed
  
  ];

  return (
    <div id="gallery">
      <div className="section-title">
          <h2 style={{textAlign: "center"}} >Gallery</h2>
          <p style={{textAlign: "center"}}>Capturing the vibrant spirit of our school community through a visual journey in our gallery</p>
        </div>
    <div className="main-gallery-container">
  {events.map((event, index) => (
    <div key={`flexbox-item-${index}`} className="flexbox-item">
      <div className="card" onClick={() => openModal(event.images, 0)}>
        <img src={event.images[0].thumbnail} alt={event.title} className="card-image" />
        <div className="card-title">{event.title}</div>
      </div>
    </div>
  ))}
</div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
          className="modal-container"
          overlayClassName="modal-overlay"
        >
          <IconButton className="close-button" onClick={closeModal}>
            <CloseIcon />
          </IconButton>
          <ImageGallery items={modalImages} startIndex={currentImageIndex} />
        </Modal>
      
    </div>
  );
};  