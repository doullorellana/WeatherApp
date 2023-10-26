import CardsPronostic from "./CardsPrincipal/CardsPronostic";
import Humidity from "./CardsPrincipal/Humidity";
import Pressure from "./CardsPrincipal/Pressure";
import Visibility from "./CardsPrincipal/Visibility";
import Wind from "./CardsPrincipal/Wind";
import Footer from "./Footer";

function SectionPrincipal({
  temperature,
  humidity,
  visibility,
  pressure,
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

  //console.log(dateDay3)
  return (
    <>
      <div className="sectionPronostico">
        <CardsPronostic
          um={um}
          dateTomorrow={dateTomorrow}
          imgDateTomorrow={imgDateTomorrow}
          tempDateTomorrow={tempDateTomorrow}
          dateDay3={dateDay3}
          imgDate3={imgDate3}
          tempDate3={tempDate3}
          dateDay4={dateDay4}
          imgDate4={imgDate4}
          tempDate4={tempDate4}
          dateDay5={dateDay5}
          imgDate5={imgDate5}
          tempDate5={tempDate5}
          dateDay6={dateDay6}
          imgDate6={imgDate6}
          tempDate6={tempDate6}
        />
      </div>
      <div className="seccionHightlightsText">
        <h4 className="HightlightsText">Today's Hightlights</h4>
      </div>
      <div className="cardsHightlightsTemperature">
        <Wind temperature={temperature} />

        <Humidity humidity={humidity} />

        <Visibility visibility={visibility} />

        <Pressure pressure={pressure} />
      </div>

      <Footer />
    </>
  );
}

export default SectionPrincipal;
