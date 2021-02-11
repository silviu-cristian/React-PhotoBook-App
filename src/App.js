import React, { Component } from "react";
import "./App.css";
import "materialize-css";
import "./Components/Photos";

import Appbar from "./Components/Navbar";
import PublicGallery from "./Components/PublicGallery";
import FooterWrapper from "./Components/Footer";
//import SwiperCarousel from "./Components/SwiperCarousel";
import ScrollUpButton from "./Components/ScrollUpButton";
import StorySlider from "./Components/StorySlider";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <ScrollUpButton />
        <Appbar />
        <StorySlider />
        {/* <SwiperCarousel /> */}
        <PublicGallery />
        <FooterWrapper />
      </div>
    </React.Fragment>
  );
}

export default App;
