function Pressure({pressure}) {
  return (
    <div className="sectionPressure">
      <div className="title">
        <h1>Air Pressure</h1>
      </div>
      <div className="description">
        <h2>{pressure}</h2>
        <h3> mb</h3>
      </div>
    </div>
  );
}

export default Pressure;
