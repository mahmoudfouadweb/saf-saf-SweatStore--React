import Gallery from "react-photo-gallery";
import { photos } from "../itelities/photo";

const GalleryPage = () => {
  return(
  <div>
  <Gallery photos={photos} direction={"column"} />;
  </div>)
};

export default GalleryPage;
