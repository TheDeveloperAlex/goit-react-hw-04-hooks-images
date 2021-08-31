import React, { useState, useEffect } from "react";
import s from './Modal.module.css';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import PropTypes from 'prop-types';

const Modal = ({ id, imgs, closeModal }) => {
    const [imgModal, setImgModal] = useState('');
    const [loading, setLoading] = useState(false);
    

    const getImage = () => {
        return imgs.find(item => (
            item.id.toString() === id.toString()
        ))    
    }

    const handleEscape = (e) => e.code === "Escape" && closeModal();

    const onOverlayClick = ({ target, currentTarget }) => {
        target === currentTarget &&
           closeModal();
    };

    useEffect(() => {
        window.addEventListener("keydown", handleEscape);
        const body = document.querySelector("body");
        body.style.overflow = "hidden";
    
        setImgModal(getImage().largeImageURL);
    }, []);

    useEffect(() => {
       
        return () => {
            window.removeEventListener("keydown", handleEscape);
            const body = document.querySelector("body");
            body.style.overflow = "auto";
        }
    }, [])

    return (
        <>
            <div className={s.Overlay} onClick={onOverlayClick}>
                <div className={s.Modal} id="Modal">
                    {loading && <Loader
                        type="Circles"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={3000} //3 secs
                    /> }
                    <img src={imgModal} alt="" className={s.img} />
                </div>
            </div>
        </>    
    );
}

export default Modal;

Modal.propTypes = {
    id: PropTypes.string,
    imgs: PropTypes.array,
    closeModal: PropTypes.func,
}


    

    

