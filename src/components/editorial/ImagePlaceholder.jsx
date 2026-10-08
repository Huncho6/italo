function ImagePlaceholder({
  alt,
  caption,
  credit,
  label,
  location,
  photographer,
  src,
  year,
}) {
  const figureClassName = src
    ? "image-placeholder image-placeholder--image"
    : "image-placeholder image-placeholder--placeholder";

  return (
    <figure className={figureClassName}>
      <div className="image-placeholder__frame">
        {src ? (
          <img
            className="image-placeholder__image"
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="image-placeholder__ghost" aria-label={alt}>
            {label ? (
              <span className="image-placeholder__ghost-label">{label}</span>
            ) : null}
            <strong>{alt}</strong>
          </div>
        )}
      </div>

      <figcaption className="image-placeholder__caption">
        <div className="image-placeholder__meta-row">
          <span>{year}</span>
          {location ? <span>{location}</span> : null}
        </div>
        <p>{caption}</p>
        <div className="image-placeholder__meta-row image-placeholder__meta-row--secondary">
          {credit ? <span>{credit}</span> : null}
          {photographer ? <span>{photographer}</span> : null}
        </div>
      </figcaption>
    </figure>
  );
}

export default ImagePlaceholder;
