function SectionPrincipal({temperature, humidity, visibility, pressure}) {
  return (
    <>
      <div className="sectionPronostico">
        <h1>Pronostico</h1>
      </div>
      <div className="seccionHightlightsText">
        <h4 className="HightlightsText">Today's Hightlights</h4>
      </div>
      <div className="cardsHightlightsTemperature">
        <div className="sectionWind">
          <div className="title">
            <h1>Wind status</h1>
          </div>
          <div className="description">
            <h2>{temperature}</h2>
            <h3> mph</h3>
          </div>
        </div>
        <div className="sectionHumidity">
          <div className="title">
            <h1>Humidity</h1>
          </div>
          <div className="description">
            <h2>{humidity}</h2>
            <h3> %</h3>
          </div>
        </div>
        <div className="sectionVisibility">
          <div className="title">
            <h1>Visibility</h1>
          </div>
          <div className="description">
            <h2>{visibility}</h2>
            <h3> miles</h3>
          </div>
        </div>
        <div className="sectionPressure">
          <div className="title">
            <h1>Air Pressure</h1>
          </div>
          <div className="description">
            <h2>{pressure}</h2>
            <h3> mb</h3>
          </div>
        </div>
      </div>
      <div className="sectionFooter">
        <h5>created by Doull Orellana - devChallenges.io</h5>
      </div>
    </>
  );
}

export default SectionPrincipal;
