import ImagePlaceholder from "./ImagePlaceholder";

function PhotoCollage({ items }) {
  return (
    <div className="photo-collage">
      {items.map((item, index) => (
        <div
          className={`photo-collage__item photo-collage__item--${index + 1}`}
          key={item.id || item.src || item.caption}
        >
          <ImagePlaceholder {...item} />
        </div>
      ))}
    </div>
  );
}

export default PhotoCollage;
