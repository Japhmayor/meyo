function Loading() {
  document.body.style = "background: black";
  return (
    <div className="section loading-header">
      <span className="loading-code">&lt;code&gt;</span>
      <h2 className="glitch" data-text="Bontus">
        Bontus
      </h2>
      <span className="loading-code">&lt;/code&gt;</span>
    </div>
  );
}

export default Loading;
