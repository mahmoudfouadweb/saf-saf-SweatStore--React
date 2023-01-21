import { photos } from "../itelities/photos";
import Photo from "../components/Photo";
import PageTitle from "../components/PageTitle";

import Gallery from "react-photo-gallery";
import { arrayMove, SortableContainer, SortableElement } from "react-sortable-hoc";

///////////////////////////

const SortablePhoto = SortableElement((item) => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
  <Gallery
    photos={items}
    renderImage={(props) => <SortablePhoto {...props} />}
  />
));

const GalleryPage = () => {
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };
  return (
    <>
      <PageTitle title={"Gallery"} />
      <Gallery photos={photos} direction={"column"} />;
      <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />
    </>
  );
};

export default GalleryPage;
