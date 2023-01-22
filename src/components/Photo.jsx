import { useState } from "react";

const imgWithClick = { cursor: "pointer" };

const Photo = ({  photo, margin, direction, top, left }) => {
  const imgStyle = { margin: margin };
  if (direction === "column") {
    imgStyle.position = "absolute";
    imgStyle.left = left;
    imgStyle.top = top;
  }
  
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  console.log(isClicked);
  return (
    <img
      style={  { ...imgStyle, ...imgWithClick } }
      {...photo}
      onClick={() => setIsClicked(photo.src)}
      alt="imgs"
    />
  );
};

export default Photo;
