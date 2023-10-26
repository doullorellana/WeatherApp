function CardsPronostic({
  um,
  dateTomorrow,
  imgDateTomorrow,
  tempDateTomorrow,
  dateDay3,
  imgDate3,
  tempDate3,
  dateDay4,
  imgDate4,
  tempDate4,
  dateDay5,
  imgDate5,
  tempDate5,
  dateDay6,
  imgDate6,
  tempDate6,
}) {
  // Formateando el resultado de la Temperatura a 0 decimales
  const temperaturas = (e) => {
    //console.log(e.toFixed(0));
    return e.toFixed(0);
  };

  //let dateTomorrow = formatDate(pronostic.list[3].dt_txt);
  //console.log(pronostic);

  /*
    url pronostic: https://api.openweathermap.org/data/2.5/forecast?lat=40.76078&lon=-111.89105&appid=3b6c125c1daf193d106da991d91da4cd
                   https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API}

                   Array Posiciones:
                   Mañana:     3: 6am, 5: 12pm, 7: 6pm
                   Siguiente:  11: 6am, 13: 12pm, 15: 6pm
                   Siguiente:  19: 6am, 21: 12pm, 23: 6pm
                   Siguiente:  27: 6am, 29: 12pm, 31: 6pm
                   Siguiente:  35: 6am, 37: 12pm, 39: 6pm
    */

  return (
    <>
      <div className="pronosticCards">
        {dateTomorrow}
        <img src={`${"./img/" + imgDateTomorrow + ".png"}`} />
        <h5>
          {tempDateTomorrow && temperaturas(tempDateTomorrow)}
          {um}
        </h5>
      </div>

      <div className="pronosticCards">
        {dateDay3}
        <img src={`${"./img/" + imgDate3 + ".png"}`} />
        <h5>
          {tempDate3 && temperaturas(tempDate3)}
          {um}
        </h5>
      </div>

      <div className="pronosticCards">
        {dateDay4}
        <img src={`${"./img/" + imgDate4 + ".png"}`} />
        <h5>
          {tempDate4 && temperaturas(tempDate4)}
          {um}
        </h5>
      </div>

      <div className="pronosticCards">
        {dateDay5}
        <img src={`${"./img/" + imgDate5 + ".png"}`} />
        <h5>
          {tempDate5 && temperaturas(tempDate5)}
          {um}
        </h5>
      </div>

      <div className="pronosticCards">
        {dateDay6}
        <img src={`${"./img/" + imgDate6 + ".png"}`} />
        <h5>
          {tempDate6 && temperaturas(tempDate6)}
          {um}
        </h5>
      </div>
    </>
  );
}

export default CardsPronostic;
