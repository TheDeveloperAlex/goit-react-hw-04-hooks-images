import React, { useState } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [name, setName] = useState("");

  const onSubmit = (query) => {
    setName(query);
  };

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      <ToastContainer />
      <ImageGallery query={name} />
    </>
  );
}
