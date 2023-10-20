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

  useEffect(() => {
    if (lat === null && long === null) return; // Validando vacíos antes del Fetch

    console.log("Fetch de datos del clima");

    const getData = async () => {
      //const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIkey}`;  //Grados Farenheit
      // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}   //Prediccion 5 dias, 3 horas por dia x Lat Long
      // api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}         //Prediccion 5 dias, 3 horas por dia x Ciudad
      //api.openweathermap.org/data/2.5/weather?q=Tegucigalpa&appid={API key}   //Para busquedas por ciudad

      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIkey}&units=metric`; // Grados Celcius
      const res = await fetch(URL);
      const data = await res.json();
      console.log(data);
      setCurrentWeather(data);
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
  };

  // Formateando el resultado de la Temperatura a 0 decimales
  const temperatura = (e) => {
    console.log(e.toFixed(0));
    return e.toFixed(0);
  };

  // Conversion Formato Fecha
  const formatDate = () => {
    const options = { weekday: "short", day: "numeric", month: "short" };
    const day = new Date();
    return day.toLocaleDateString("en-gb", options);
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
                <img src="../public/img/gps.svg" />
              </button>
            </div>
          </div>
          <div className="imgTimeStatus">
            {/*<img src="src/assets/Shower.png" alt="" />*/}
            {currentWeather === null ? (
              ""
            ) : (
              <>
                <img
                  src={`${
                    "../public/img/" + currentWeather.weather[0].icon + ".png"
                  }`}
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
            <h4>°C</h4>
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
                  Today . {formatDate()} <br />
                  <br />
                  <img src="../public/img/location.svg" /> {currentWeather.name}
                </>
              )}
            </h3>
          </div>
        </div>

        {/* Panel Principal de la App */}
        <div className="sidePrincipal">
          <h1>Hello</h1>
          <div>
            <div className="contenidoPrueba">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
