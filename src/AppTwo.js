import React, { Component, useState } from "react";
import "./App.css";
import "materialize-css";
import "./Components/Photos";

//import Appbar from "./Components/Navbar";
import PublicGallery from "./Components/PublicGallery";
import FooterWrapper from "./Components/Footer";
//import SwiperCarousel from "./Components/SwiperCarousel";
import ScrollUpButton from "./Components/ScrollUpButton";
import StorySlider from "./Components/StorySlider";

import UploadForm from "./Components/UploadForm.js";
import ImageGrid from "./Components/ImageGrid";
import Modal from "./Components/Modal";

function AppTwo() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <React.Fragment>
      <div className="container">
        <ScrollUpButton />
        {/*<Appbar />*/}

        <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      </div>
    </React.Fragment>
  );
}

export default AppTwo;
