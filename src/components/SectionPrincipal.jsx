import Humidity from "./CardsPrincipal/Humidity";
import Pressure from "./CardsPrincipal/Pressure";
import Visibility from "./CardsPrincipal/Visibility";
import Wind from "./CardsPrincipal/Wind";
import Footer from "./Footer";

function SectionPrincipal({ temperature, humidity, visibility, pressure }) {
  return (
    <>
      <div className="sectionPronostico">
        <h1>Pronostico</h1>
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
