import React from "react";
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
  <Slide image={<img alt="" src="https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2191&q=80"/>}>
    <Caption placement="center">
      <h3>
        PORTRAIT PHOTOGRAPHY
      </h3>
      <h5 className="light grey-text text-lighten-3">
        There are literally no words.
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src="https://cdn.windowsreport.com/wp-content/uploads/2020/09/Best-apps-software-to-restore-old-photos-930x620.jpg"/>}>
    <Caption placement="left">
      <h3>
        PHOTO RESTORATION
      </h3>
      <h5 className="light grey-text text-lighten-3">
      Restore your old photos to perfection.
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src="https://cdn.shopify.com/s/files/1/0088/5778/0304/products/NightlighEdit_4_1024x1024@2x.png?v=1581289536"/>}>
    <Caption placement="right">
      <h3>
      3D PRINTED LITHOPHANE
      </h3>
      <h5 className="light grey-text text-lighten-3">
        Magical photos for the night time!
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src="https://images.unsplash.com/photo-1507470461926-c375946b1136?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"/>}>
    <Caption placement="center">
      <h3>
        Urban Landscapes
      </h3>
      <h5 className="light grey-text text-lighten-3">
        Every city has it's own magic! 
      </h5>
    </Caption>
  </Slide>
</Slider>
);
}

export default StorySlider;
