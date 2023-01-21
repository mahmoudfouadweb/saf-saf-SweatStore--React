import Gallery from "react-photo-gallery";
import PageTitle from "../components/PageTitle";
import { photos } from "../itelities/photo";

const GalleryPage = () => {
  return (
    <>
      <PageTitle title={"page"} />
      <Gallery photos={photos} direction={"column"} />;
    </>
  );
};

export default GalleryPage;
