function Wind({temperature}) {
  return (
    <div className="sectionWind">
      <div className="title">
        <h1>Wind status</h1>
      </div>
      <div className="description">
        <h2>{temperature}</h2>
        <h3> mph</h3>
      </div>
    </div>
  );
}

export default Wind;
