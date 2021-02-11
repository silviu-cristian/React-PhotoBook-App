
import ReactDOM from "react-dom";
import React, { Component } from "react";
import { Slider, Slide, Caption } from "react-materialize";
import "materialize-css/dist/css/materialize.min.css";





function StorySlider() {
    return (
<Slider
  fullscreen={false}
  speed={1800}
  options={{
    duration: 500,
    height:  "90vh" ,
    indicators: true,
    interval: 6000
  }}
  
>
  <Slide image={<img alt="" src="https://source.unsplash.com/2ShvY8Lf6l0/800x599"/>}>
    <Caption placement="center">
      <h3>
        This is our big Tagline!
      </h3>
      <h5 className="light grey-text text-lighten-3">
        Here's our small slogan.
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src="https://source.unsplash.com/PpOHJezOalU/800x599"/>}>
    <Caption placement="left">
      <h3>
        Left Aligned Caption
      </h3>
      <h5 className="light grey-text text-lighten-3">
        Here's our small slogan.
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src="https://source.unsplash.com/2ShvY8Lf6l0/800x599"/>}>
    <Caption placement="right">
      <h3>
        Right Aligned Caption
      </h3>
      <h5 className="light grey-text text-lighten-3">
        Here's our small slogan.
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src="https://source.unsplash.com/I1ASdgphUH4/800x599"/>}>
    <Caption placement="center">
      <h3>
        This is our big Tagline!
      </h3>
      <h5 className="light grey-text text-lighten-3">
        Here's our small slogan.
      </h5>
    </Caption>
  </Slide>
</Slider>

);
}

export default StorySlider;
