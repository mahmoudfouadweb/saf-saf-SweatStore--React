import {  sweetsPhotos } from "../utilities/photos";

import PageTitle from "../components/PageTitle";

import Gallery from "react-photo-gallery";
import { useState,useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
////////////////////////////
const GalleryPage = () => {
  
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
    <>
      <PageTitle title={"Gallery"} />
      <Gallery photos={sweetsPhotos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={sweetsPhotos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  );
};

export default GalleryPage;
