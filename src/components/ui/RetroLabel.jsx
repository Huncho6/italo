function RetroLabel({ children, className = "" }) {
  return <span className={`retro-label ${className}`.trim()}>{children}</span>;
}

export default RetroLabel;
