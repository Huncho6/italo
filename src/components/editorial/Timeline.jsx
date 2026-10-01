function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <article className="timeline__item" key={`${item.year}-${item.label}`}>
          <div className="timeline__year">{item.year}</div>
          <div className="timeline__body">
            <h4>{item.label}</h4>
            <p>{item.note}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Timeline;
