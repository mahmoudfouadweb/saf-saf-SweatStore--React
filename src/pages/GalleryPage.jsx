import Gallery from "react-photo-gallery";
import { photos } from "../itelities/photo";

const GalleryPage = () => {
  return <Gallery photos={photos} direction={"column"} />;
};

export default GalleryPage;
