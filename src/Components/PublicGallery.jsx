import React, { useState, useCallback } from "react";

import { render } from "react-dom";
import { Icon } from "react-materialize";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./Photos";
import galleryTitle from "../Media/galleryTitle.svg";

function PublicGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <h1 className="galleryTitle">
        <img src={galleryTitle} alt="Gallery" />
      </h1>

      <Gallery photos={photos} onClick={openLightbox} />
      <div className="loadMoreBtnContainer">
        <a
          class="loadMorePicsButton"
          style={{ marginRight: "5px" }}
        >
          
          <Icon className="loadMorePicsIcon">add_photo_alternate</Icon> Load more
        </a>
      </div>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default PublicGallery;
