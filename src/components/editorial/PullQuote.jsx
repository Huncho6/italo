function PullQuote({ quote, cite }) {
  return (
    <blockquote className="pull-quote">
      <p>
        <q>{quote}</q>
      </p>
      {cite ? <footer>{cite}</footer> : null}
    </blockquote>
  );
}

export default PullQuote;
