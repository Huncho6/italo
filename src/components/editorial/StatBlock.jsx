function StatBlock({ label, note, value }) {
  return (
    <div className="stat-block">
      <div className="stat-block__value">{value}</div>
      <div className="stat-block__copy">
        <span>{label}</span>
        {note ? <p>{note}</p> : null}
      </div>
    </div>
  );
}

export default StatBlock;
