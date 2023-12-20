
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
      title: 'Sports Day',
      images: [
        { original: 'https://picsum.photos/800/400?random=1', thumbnail: 'https://picsum.photos/800/400?random=1' },
        { original: 'https://picsum.photos/800/400?random=2', thumbnail: 'https://picsum.photos/800/400?random=2' },
        { original: 'https://picsum.photos/800/400?random=3', thumbnail: 'https://picsum.photos/800/400?random=3' },
      ],
    },
    {
      title: 'Annual Day',
      images: [
        { original: 'https://picsum.photos/800/400?random=4', thumbnail: 'https://picsum.photos/800/400?random=4' },
        { original: 'https://picsum.photos/800/400?random=5', thumbnail: 'https://picsum.photos/800/400?random=5' },
        { original: 'https://picsum.photos/800/400?random=6', thumbnail: 'https://picsum.photos/800/400?random=6' },
      ],
    },
    {
      title: 'Childrens Day',
      images: [
        { original: 'https://picsum.photos/800/400?random=7', thumbnail: 'https://picsum.photos/800/400?random=7' },
        { original: 'https://picsum.photos/800/400?random=8', thumbnail: 'https://picsum.photos/800/400?random=8' },
        { original: 'https://picsum.photos/800/400?random=9', thumbnail: 'https://picsum.photos/800/400?random=9' },
      ],
    },
    {
      title: 'Navarathiri Celebration',
      images: [
        { original: 'https://picsum.photos/800/400?random=10', thumbnail: 'https://picsum.photos/800/400?random=10' },
        { original: 'https://picsum.photos/800/400?random=11', thumbnail: 'https://picsum.photos/800/400?random=11' },
        { original: 'https://picsum.photos/800/400?random=12', thumbnail: 'https://picsum.photos/800/400?random=12' },
      ],
    },
    {
      title: 'MONTESSORI CLASS ACTIVITY',
      images: [
        { original: 'https://picsum.photos/800/400?random=13', thumbnail: 'https://picsum.photos/800/400?random=13' },
        { original: 'https://picsum.photos/800/400?random=14', thumbnail: 'https://picsum.photos/800/400?random=14' },
        { original: 'https://picsum.photos/800/400?random=15', thumbnail: 'https://picsum.photos/800/400?random=15' },
      ],
    },
    {
      title: 'KRISHNA JAYANTHI',
      images: [
        { original: 'https://picsum.photos/800/400?random=17', thumbnail: 'https://picsum.photos/800/400?random=17' },
        { original: 'https://picsum.photos/800/400?random=18', thumbnail: 'https://picsum.photos/800/400?random=18' },
        { original: 'https://picsum.photos/800/400?random=19', thumbnail: 'https://picsum.photos/800/400?random=19' },
      ],
    },
    {
      title: 'VINAYAGAR CHADURTHI',
      images: [
        { original: 'https://picsum.photos/800/400?random=20', thumbnail: 'https://picsum.photos/800/400?random=20' },
        { original: 'https://picsum.photos/800/400?random=21', thumbnail: 'https://picsum.photos/800/400?random=21' },
        { original: 'https://picsum.photos/800/400?random=22', thumbnail: 'https://picsum.photos/800/400?random=22' },
      ],
    },
    {
      title: 'INDEPENDANCE DAY',
      images: [
        { original: 'https://picsum.photos/800/400?random=23', thumbnail: 'https://picsum.photos/800/400?random=23' },
        { original: 'https://picsum.photos/800/400?random=24', thumbnail: 'https://picsum.photos/800/400?random=24' },
        { original: 'https://picsum.photos/800/400?random=25', thumbnail: 'https://picsum.photos/800/400?random=25' },
      ],
    },
    {
      title: 'INVESTITURE CEREMONY',
      images: [
        { original: 'https://picsum.photos/800/400?random=26', thumbnail: 'https://picsum.photos/800/400?random=26' },
        { original: 'https://picsum.photos/800/400?random=27', thumbnail: 'https://picsum.photos/800/400?random=27' },
        { original: 'https://picsum.photos/800/400?random=28', thumbnail: 'https://picsum.photos/800/400?random=28' },
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