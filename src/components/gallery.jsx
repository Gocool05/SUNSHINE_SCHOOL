
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
      title: 'Field Trip',
      images: [
        { original: `${process.env.PUBLIC_URL}/img/Field Trip Marine Kingdom/a1.jpg`, thumbnail: `${process.env.PUBLIC_URL}/img/Field Trip Marine Kingdom/a1.jpg` },
        { original: `${process.env.PUBLIC_URL}/img/Field Trip Marine Kingdom/a2.jpg`, thumbnail: `${process.env.PUBLIC_URL}/img/Field Trip Marine Kingdom/a2.jpg` },
        { original: `${process.env.PUBLIC_URL}/img/Field Trip Marine Kingdom/a3.jpg`, thumbnail: `${process.env.PUBLIC_URL}/img/Field Trip Marine Kingdom/a3.jpg` },
      ],
    },
    {
      title: 'Mont Environment',
      images: [
        { original: `${process.env.PUBLIC_URL}/img/Mont Environment @ECR/a1.jpg`, thumbnail: `${process.env.PUBLIC_URL}/img/Mont Environment @ECR/a1.jpg` },
        { original: `${process.env.PUBLIC_URL}/img/Mont Environment @ECR/a2.jpg`, thumbnail: `${process.env.PUBLIC_URL}/img/Mont Environment @ECR/a2.jpg` },
        { original: `${process.env.PUBLIC_URL}/img/Mont Environment @ECR/a3.jpg`, thumbnail: `${process.env.PUBLIC_URL}/img/Mont Environment @ECR/a3.jpg` },
        { original: `${process.env.PUBLIC_URL}/img/Mont Environment @ECR/a4.jpg`, thumbnail: `${process.env.PUBLIC_URL}/img/Mont Environment @ECR/a4.jpg` },
        { original: `${process.env.PUBLIC_URL}/img/Mont Environment @ECR/a5.jpg`, thumbnail: `${process.env.PUBLIC_URL}/img/Mont Environment @ECR/a5.jpg` },
        { original: `${process.env.PUBLIC_URL}/img/Mont Environment @ECR/a6.jpg`, thumbnail: `${process.env.PUBLIC_URL}/img/Mont Environment @ECR/a6.jpg` },
        { original: `${process.env.PUBLIC_URL}/img/Mont Environment @ECR/a7.jpg`, thumbnail: `${process.env.PUBLIC_URL}/img/Mont Environment @ECR/a7.jpg` },
        { original: `${process.env.PUBLIC_URL}/img/Mont Environment @ECR/a8.jpg`, thumbnail: `${process.env.PUBLIC_URL}/img/Mont Environment @ECR/a8.jpg` },
  
      ],
    },
    {
      title: 'Onam',
      images: [
        { original: `${process.env.PUBLIC_URL}/img/Onam/a1.jpg`, thumbnail: `${process.env.PUBLIC_URL}/img/Onam/a1.jpg` },
        { original: `${process.env.PUBLIC_URL}/img/Onam/a2.jpg`, thumbnail: `${process.env.PUBLIC_URL}/img/Onam/a2.jpg` },
        { original: `${process.env.PUBLIC_URL}/img/Onam/a3.jpg`, thumbnail: `${process.env.PUBLIC_URL}/img/Onam/a3.jpg` },
        { original: `${process.env.PUBLIC_URL}/img/Onam/a4.jpg`, thumbnail: `${process.env.PUBLIC_URL}/img/Onam/a4.jpg` },
        
      ],
    },
    {
      title: 'Krishna Jayanthi',
      images: [
        { original: `${process.env.PUBLIC_URL}/img/Krishna Jayanthi @ECR/a1.jpg`, thumbnail: `${process.env.PUBLIC_URL}/img/Krishna Jayanthi @ECR/a1.jpg` },
        { original: `${process.env.PUBLIC_URL}/img/Krishna Jayanthi @ECR/a2.jpg`, thumbnail: `${process.env.PUBLIC_URL}/img/Krishna Jayanthi @ECR/a2.jpg` },
        { original: `${process.env.PUBLIC_URL}/img/Krishna Jayanthi @ECR/a3.jpg`, thumbnail: `${process.env.PUBLIC_URL}/img/Krishna Jayanthi @ECR/a3.jpg` },
      ],
    },
    {
      title: 'Childrens Day',
      images: [
        { original: `${process.env.PUBLIC_URL}/img/Children_s Day/a1.jpg`, thumbnail: `${process.env.PUBLIC_URL}/img/Children_s Day/a1.jpg` },
        { original: `${process.env.PUBLIC_URL}/img/Children_s Day/a2.jpg`, thumbnail: `${process.env.PUBLIC_URL}/img/Children_s Day/a2.jpg` },
        
      ],
    },
    {
      title: 'Deepavali',
      images: [
        { original: `${process.env.PUBLIC_URL}/img/Deepavali/a1.jpg`, thumbnail: `${process.env.PUBLIC_URL}/img/Deepavali/a1.jpg` },
        { original: `${process.env.PUBLIC_URL}/img/Deepavali/a2.jpg`, thumbnail: `${process.env.PUBLIC_URL}/img/Deepavali/a2.jpg` },
      ],
    },
    {
      title: 'Independence Day',
      images: [
        { original: `${process.env.PUBLIC_URL}/img/Independence Day/a1.jpg`, thumbnail: `${process.env.PUBLIC_URL}/img/Independence Day/a1.jpg` },
        { original: `${process.env.PUBLIC_URL}/img/Independence Day/a2.jpg`, thumbnail: `${process.env.PUBLIC_URL}/img/Independence Day/a2.jpg` },
      ],
    },
    {
      title: 'Navaratri',
      images: [
        { original: `${process.env.PUBLIC_URL}/img/Navaratri/a1.jpg`, thumbnail: `${process.env.PUBLIC_URL}/img/Navaratri/a1.jpg` },
        { original: `${process.env.PUBLIC_URL}/img/Navaratri/a2.jpg`, thumbnail: `${process.env.PUBLIC_URL}/img/Navaratri/a2.jpg` },
      ],
    },
    {
      title: 'Vinayakar Chathurthi',
      images: [
        { original: `${process.env.PUBLIC_URL}/img/Vinayakar Chathurthi/a1.jpg`, thumbnail: `${process.env.PUBLIC_URL}/img/Vinayakar Chathurthi/a1.jpg` },
      ],
    },
  
    
    
    // Add more events here as needed
  
  ];

  return (
    <div id="gallery" >
      <div className="section-title" style={{marginTop: "70px"}}>
          <h2 style={{textAlign: "center"}} >Albums</h2>
          <p style={{textAlign: "center"}}>Moments of Sunshine</p>
        </div>
    <div className="main-gallery-container" style={{marginBottom: "50px"}} >
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