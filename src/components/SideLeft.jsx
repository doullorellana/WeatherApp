import FooterSideLeft from "./CardsSideLeft/FooterSideLeft";
import ImageTimeStatus from "./CardsSideLeft/ImageTimeStatus";
import StatusClima from "./CardsSideLeft/StatusClima";
import Temperature from "./CardsSideLeft/Temperature";

function SideLeft({
  currentWeatherIcon,
  temperature2,
  um,
  currentWeatherMain,
  formatFecha,
  currentWeatherName,
  currentWeatherCountry,
}) {
  return (
    <>
      <ImageTimeStatus currentWeatherIcon={currentWeatherIcon} />

      <Temperature temperature2={temperature2} um={um} />

      <StatusClima currentWeatherMain={currentWeatherMain} />

      <FooterSideLeft
        formatFecha={formatFecha}
        currentWeatherName={currentWeatherName}
        currentWeatherCountry={currentWeatherCountry}
      />
    </>
  );
}

export default SideLeft;
