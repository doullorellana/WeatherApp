import { useEffect, useState } from "react";
import "./App.css";
import SectionPrincipal from "./components/SectionPrincipal";
import PruebasInformativas from "./components/PruebasInformativas";
import SideLeft from "./components/SideLeft";

function App() {
  // const today = new Date();
  const APIkey = "3b6c125c1daf193d106da991d91da4cd"; // Doull Orellana
  //const APIkey = "ad4828c41afed65166d9b32f6e589015"; // Doull Orellana Prueba
  //const APIkey = 'f26a1d2c7387a78efdda84903fecbb7f';   // API Maestro Harold
  //const [lat, setLat] = useState("14.4500000"); // Latitude de Comayagua, Honduras
  //const [long, setLong] = useState("-87.6333300"); // Longitud de Comayagua, Honduras

  //const [lat, setLat] = useState("35.6895"); // Latitude de Tokio, Japon
  //const [long, setLong] = useState("139.69171"); // Longitud de Tokio, Japon

  //const [lat, setLat] = useState("20.593684"); // Latitude de India
  //const [long, setLong] = useState("78.96288"); // Longitud de India

  //const [lat, setLat] = useState("42.84998"); // Latitude de Vitoria Gasteiz España
  //const [long, setLong] = useState("-2.67268"); // Longitud de Vitoria Gasteiz España

  //const [lat, setLat] = useState("31.76904"); // Latitude de Jerusalen
  //const [long, setLong] = useState("35.21633"); // Longitud de Jerusalen

  const [lat, setLat] = useState("40.76078"); // Latitude de Salt Lake City, UTAH USA
  const [long, setLong] = useState("-111.89105"); // Longitud de Salt Lake City, UTAH USA

  //const [lat, setLat] = useState("-34.61315"); // Latitude de Salt Lake City, UTAH USA
  //const [long, setLong] = useState("-58.37723"); // Longitud de Salt Lake City, UTAH USA

  const [currentWeatherC, setCurrentWeatherC] = useState(null); // Grados Celcius
  const [currentWeatherF, setCurrentWeatherF] = useState(null); //Grados Farenheit
  const [gradosC, setGradosC] = useState(`&units=metric`); // Por defecto, buscará en °Celcius
  const [gradosF, setGradosF] = useState(``); // Por defecto, buscará en °Fahrenheits
  const [UM, setUM] = useState("°C"); // Por defecto, mostrará en °Celcius

  useEffect(() => {
    if (lat === null && long === null) return; // Validando vacíos antes del Fetch

    console.log("Fetch de datos del clima");

    const getData = async () => {
      //const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIkey}`;  //Grados Farenheit
      // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}   //Prediccion 5 dias, 3 horas por dia x Lat Long
      // api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}         //Prediccion 5 dias, 3 horas por dia x Ciudad
      //api.openweathermap.org/data/2.5/weather?q=Tegucigalpa&appid={API key}   //Para busquedas por ciudad

      // Grados Celcuis
      const URLC = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIkey}${gradosC}`; // Grados Celcius
      const resC = await fetch(URLC);
      const dataC = await resC.json();
      setCurrentWeatherC(dataC);

      // Grados Fahrenheits
      const URLF = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIkey}${gradosF}`; // Grados Fahrenheits
      const resF = await fetch(URLF);
      const dataF = await resF.json();
      //console.log(dataF);
      setCurrentWeatherF(dataF);
    };
    getData();
  }, [lat, long]);

  // Funcion que indica que hemos encontrado la ubicacion
  const handleSuccess = (dataLocation) => {
    console.log("Tenemos la ubicación.", dataLocation);
    const { latitude, longitude } = dataLocation.coords;
    setLat(latitude);
    setLong(longitude);
  };

  // Funcion que indica que no se permite encontrar la ubicacion
  const handleError = () => {
    console.log("Ubicación denegada.");
  };

  // Funcion para Geolocalizar mi ubicacion
  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  };

  // Funcion para Geolocalizar mediante la busqueda de una ubicacion
  const handleSearchLocation = () => {
    console.log("Buscar por medio de un lugar");
    // llamando al componente SideBar.jsx
  };

  // Formateando el resultado de la Temperatura a 0 decimales
  const temperatura = (e) => {
    //console.log(e.toFixed(0));
    return e.toFixed(0);
  };

  // Formateando el resultado a 1 decimal
  const unDecimal = (e) => {
    //console.log(e.toFixed(1));
    return e.toFixed(1);
  };

  // Conversion Formato Fecha
  const formatDate = () => {
    const options = { weekday: "short", day: "numeric", month: "short" };
    const day = new Date();
    return day.toLocaleDateString("en-gb", options);
  };

  // Haciendo una conversion del tipo de grado a hacer la medicion
  const handleChangeCelcius = () => {
    const gradosCelcius = `&units=metric`;
    const symbolCelcuis = "°C";
    setGradosC(gradosCelcius);
    setUM(symbolCelcuis);
    console.log("Grados Celcius", gradosCelcius, symbolCelcuis);
  };

  const handleChangeFahrenheit = () => {
    const gradosFahrenheit = ``;
    const symbolFahrenheit = "°F";
    setGradosF(gradosFahrenheit);
    setUM(symbolFahrenheit);
    console.log("Grados Fahrenheit", gradosFahrenheit, symbolFahrenheit);
  };

  return (
    <>
      <div className="container">
        {/* Panel Izquierdo de la App */}
        <div className="sideLeft">
          {/* Seccion de busqueda dentro del panel izq de la pantalla */}
          <div className="sectionSearchLocation">
            <div className="otherLocations">
              <button
                onClick={handleSearchLocation}
                className="btnSearchLocation"
              >
                Search for Places
              </button>
            </div>
            <div className="myLocation">
              <button onClick={handleLocation} className="btnMyLocation">
                <img src="./img/gps.svg" />
              </button>
            </div>
          </div>
          {currentWeatherC === null || currentWeatherC === null ? (
            ""
          ) : (
            <>
              {UM === "°C" ? (
                <>
                  <SideLeft
                    currentWeatherIcon={`${
                      "./img/" + currentWeatherC.weather[0].icon + ".png"
                    }`}
                    temperature2={temperatura(currentWeatherC.main.temp)}
                    um={UM}
                    currentWeatherMain={currentWeatherC.weather[0].main}
                    formatFecha={formatDate()}
                    currentWeatherName={currentWeatherC.name}
                    currentWeatherCountry={currentWeatherC.sys.country}
                  />
                </>
              ) : (
                <>
                  <SideLeft
                    currentWeatherIcon={`${
                      "./img/" + currentWeatherF.weather[0].icon + ".png"
                    }`}
                    temperature2={temperatura(currentWeatherF.main.temp)}
                    um={UM}
                    currentWeatherMain={currentWeatherF.weather[0].main}
                    formatFecha={formatDate()}
                    currentWeatherName={currentWeatherF.name}
                    currentWeatherCountry={currentWeatherF.sys.country}
                  />
                </>
              )}
            </>
          )}
        </div>

        {/* Panel Principal de la App */}
        <div className="sidePrincipal">
          {/* <h1>Hello</h1> */}
          <div>
            <div>
              {/* Botones selectores para cambiar entre °F y °C */}
              <div className="sectionSelector_CelciusFahrenheit">
                <div className="sectionCelcius">
                  <button
                    onClick={handleChangeCelcius}
                    className="btnSectionCelcius"
                  >
                    <h3>°C</h3>
                  </button>
                </div>
                <div className="sectionFahrenheit">
                  <button
                    onClick={handleChangeFahrenheit}
                    className="btnSectionFahrenheit"
                  >
                    <h3>°F</h3>
                  </button>
                </div>
              </div>
              {currentWeatherC === null || currentWeatherC === null ? (
                ""
              ) : (
                <>
                  {UM === "°C" ? (
                    <>
                      <SectionPrincipal
                        temperature={temperatura(currentWeatherC.wind.speed)}
                        humidity={currentWeatherC.main.humidity}
                        visibility={unDecimal(
                          currentWeatherC.visibility / 1000
                        )}
                        pressure={currentWeatherC.main.pressure}
                      />
                    </>
                  ) : (
                    <>
                      <SectionPrincipal
                        temperature={temperatura(currentWeatherF.wind.speed)}
                        humidity={currentWeatherF.main.humidity}
                        visibility={unDecimal(
                          currentWeatherF.visibility / 1000
                        )}
                        pressure={currentWeatherF.main.pressure}
                      />
                    </>
                  )}
                </>
              )}
              <PruebasInformativas />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
