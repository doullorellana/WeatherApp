import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const today = new Date();
  const APIkey = "3b6c125c1daf193d106da991d91da4cd"; // Doull Orellana
  //const APIkey = "ad4828c41afed65166d9b32f6e589015"; // Doull Orellana Prueba
  //const APIkey = 'f26a1d2c7387a78efdda84903fecbb7f';   // API Maestro Harold
  const [lat, setLat] = useState("14.4500000"); // Latitude de Comayagua, Honduras
  const [long, setLong] = useState("-87.6333300"); // Longitud de Comayagua, Honduras
  const [currentWeather, setCurrentWeather] = useState(null);
  const [grados, setGrados] = useState(`&units=metric`); // Por defecto, buscará en °Celcius
  const [UM, setUM] = useState("°C"); // Por defecto, mostrará en °Celcius

  useEffect(() => {
    if (lat === null && long === null) return; // Validando vacíos antes del Fetch

    console.log("Fetch de datos del clima");

    const getData = async () => {
      //const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIkey}`;  //Grados Farenheit
      // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}   //Prediccion 5 dias, 3 horas por dia x Lat Long
      // api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}         //Prediccion 5 dias, 3 horas por dia x Ciudad
      //api.openweathermap.org/data/2.5/weather?q=Tegucigalpa&appid={API key}   //Para busquedas por ciudad

      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIkey}${grados}`; // Grados Celcius ó Fahrenheit
      const res = await fetch(URL);
      const data = await res.json();
      //console.log(data);
      setCurrentWeather(data);
    };
    getData();
  }, [lat, long, grados]);

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
    setGrados(gradosCelcius);
    setUM("°C");
    console.log("Grados Celcius", gradosCelcius, setUM);
  };

  const handleChangeFahrenheit = () => {
    const gradosFahrenheit = ``;
    setGrados(gradosFahrenheit);
    setUM("°F");
    console.log("Grados Fahrenheit", gradosFahrenheit, setUM);
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
          <div className="imgBackground_sideLeft">
            <img
              src="./img/Cloud-background.png"
              alt="imgBackground_sideLeft"
            />
          </div>
          <div className="imgTimeStatus">
            {/*<img src="src/assets/Shower.png" alt="" />*/}
            {currentWeather === null ? (
              ""
            ) : (
              <>
                <img
                  src={`${"./img/" + currentWeather.weather[0].icon + ".png"}`}
                />
              </>
            )}
          </div>
          <div className="statusTemperature">
            <h1>
              {currentWeather === null ? (
                ""
              ) : (
                <>{temperatura(currentWeather.main.temp)}</>
              )}
            </h1>
            <h4>{UM}</h4>
          </div>
          <div className="statusClima">
            <h3>
              {currentWeather === null ? (
                ""
              ) : (
                <>{currentWeather.weather[0].main}</>
              )}
            </h3>
          </div>
          <div className="txtDate">
            <h3>
              {currentWeather === null ? (
                ""
              ) : (
                <>
                  Today{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height=".2em"
                    viewBox="0 0 512 512"
                    fill="#88869D"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>{" "}
                  {formatDate()}
                </>
              )}
            </h3>
          </div>
          <div className="txtLocation">
            <h3>
              {currentWeather === null ? (
                ""
              ) : (
                <>
                  <img src="./img/location.svg" /> {currentWeather.name},{" "}
                  {currentWeather.sys.country}
                </>
              )}
            </h3>
          </div>
        </div>

        {/* Panel Principal de la App */}
        <div className="sidePrincipal">
          {/* <h1>Hello</h1> */}
          <div>
            <div>
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
              {currentWeather === null ? (
                ""
              ) : (
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
                        <h2>{temperatura(currentWeather.wind.speed)}</h2>
                        <h3> mph</h3>
                      </div>
                    </div>
                    <div className="sectionHumidity">
                      <div className="title">
                        <h1>Humidity</h1>
                      </div>
                      <div className="description">
                        <h2>{currentWeather.main.humidity}</h2>
                        <h3> %</h3>
                      </div>
                    </div>
                    <div className="sectionVisibility">
                      <div className="title">
                        <h1>Visibility</h1>
                      </div>
                      <div className="description">
                        <h2>{unDecimal(currentWeather.visibility / 1000)}</h2>
                        <h3> miles</h3>
                      </div>
                    </div>
                    <div className="sectionPressure">
                      <div className="title">
                        <h1>Air Pressure</h1>
                      </div>
                      <div className="description">
                        <h2>{currentWeather.main.pressure}</h2>
                        <h3> mb</h3>
                      </div>
                    </div>
                  </div>
                  <div className="sectionFooter">
                    <h5>created by Doull Orellana - devChallenges.io</h5>
                  </div>
                </>
              )}
              {/*  Contenido Informativo
              <ul>
                {currentWeather === null ? (
                  "Da clic al boton"
                ) : (
                  <>
                    <li>API: {APIkey}</li>
                    <li>Temperature: {currentWeather.main.temp}°C</li>
                    <li>Clima: {currentWeather.weather[0].main}</li>
                    <li>
                      Descripction: {currentWeather.weather[0].description}
                    </li>
                    <li>Today: {today.toDateString()}</li>
                    <li>City: {currentWeather.name}</li>
                    <li>Country: {currentWeather.sys.country}</li>
                    <li>Temp Mín: {currentWeather.main.temp_min}</li>
                    <li>Temp Max: {currentWeather.main.temp_max}</li>
                    <li>Wind status: {currentWeather.wind.speed} mph</li>
                    <li>Humidity: {currentWeather.main.humidity}%</li>
                    <li>
                      Visibility: {currentWeather.visibility / 1000} miles
                    </li>
                    <li>Air Pressure: {currentWeather.main.pressure} mb</li>
                    <li>
                      {currentWeather.weather[0].icon}
                      <img
                        src={`${
                          "https://openweathermap.org/img/wn/" +
                          currentWeather.weather[0].icon +
                          ".png"
                        }`}
                      />
                    </li>
                  </>
                )}
              </ul>
                      */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
