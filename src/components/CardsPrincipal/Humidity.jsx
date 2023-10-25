function Humidity({ humidity }) {
  const labelStyles = {
    //padding: humidity,
    padding: humidity * 1.8, // Calculo del porsentaje para la Barra de Humedad
  };

  return (
    <div className="sectionHumidity">
      <div className="title">
        <h1>Humidity</h1>
      </div>
      <div className="description">
        <h2>{humidity}</h2>
        <h3> %</h3>
      </div>
      <div className="percentText">
        <div>
          <h6>0</h6>
        </div>
        <div>
          <h6>50</h6>
        </div>
        <div>
          <h6>100</h6>
        </div>
      </div>
      <div className="animated-progress progress-blue">
        <span style={labelStyles}></span>
      </div>
      <div className="percentText2">
        <div>
          <h6>%</h6>
        </div>
      </div>
    </div>
  );
}

export default Humidity;
