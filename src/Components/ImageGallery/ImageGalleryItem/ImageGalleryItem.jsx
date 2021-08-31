import s from './ImageGalleryItem.module.css';
import React, { useState } from 'react'
import Modal from "../../Modal/Modal";
import PropTypes from 'prop-types';


const ImageGalleryItem = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState('');

  const onModalOpen = (e) => {
    setId( e.target.id );
    setIsModalOpen(true);
  };
  
  const closeModal = () => setIsModalOpen( false);


  return (
      <>
        {
              images.map((item) => (
                <li className={s.ImageGalleryItem} key={item.id}>
                  <img
                    onClick={onModalOpen}
                    src={item.webformatURL}
                    id={item.id}
                    alt={item.tag }
                    className={s.ImageGalleryItemImage}     
                  />  
                </li>    
              ))              
        }
      
            {isModalOpen && <Modal closeModal={closeModal} id={id} imgs={images} /> }
        </> 
  );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  images: PropTypes.array,
}