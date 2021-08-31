import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import s from "./ImageGallery.module.css";
import { getImagesApi } from "../../utils/Api";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import PropTypes from 'prop-types';


const ImageGallery = ({ query }) => {
  const [imgs, setImgs] = useState([]);
  const [page, setPage] = useState(1);
  const [isTarget, setIsTarget] = useState(false);
  const [loading, setLoading] = useState(false);

const getImages = ( query, page ) => {
    setLoading( true );
    
    getImagesApi( query, page )
      .then((images) =>
        setImgs((prev) => (
          [...prev, ...images]
        ))
      )
      .finally(() => setLoading( false ));
  };

const onHandelClick = () => {
    setIsTarget( true );
  };

  useEffect(() => {
    if (query) {
    getImages(query, 1);
    setPage(2);
    setImgs([]);
    }
    
  }, [query]);

  useEffect(() => {
    if (isTarget) {
      setPage((prev) => (
         prev + 1
      ));
      getImages( query, page );
      setIsTarget( false );
    }
    
  }, [isTarget])



  return (
    <>
        <div className={s.div}>
          <ul className={s.ImageGallery}>
            <ImageGalleryItem images={imgs} />
          </ul>
          <div className={s.divLoader}>
              {loading && (
            <Loader
              type="Circles"
              color="#00BFFF"
              height={150}
              width={150}
              timeout={3000} //3 secs
            />
          )}
          </div>
          
          {imgs.length > 0 && (
            <Button click={onHandelClick} page={page} />
          )}
        </div>
      </>
  );
}

export default ImageGallery;

ImageGallery.propTypes = {
  query: PropTypes.string,
}








