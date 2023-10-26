import { useEffect, useState } from "react";
import "./App.css";
import SectionPrincipal from "./components/SectionPrincipal";
import PruebasInformativas from "./components/PruebasInformativas";
import SideLeft from "./components/SideLeft";
import SideBar from "./components/SideBar";

function App({ cityLocations }) {
  // const today = new Date();
  const APIkey = "3b6c125c1daf193d106da991d91da4cd"; // Doull Orellana
  //const APIkey = "ad4828c41afed65166d9b32f6e589015"; // Doull Orellana Prueba
  //const APIkey = 'f26a1d2c7387a78efdda84903fecbb7f';   // API Maestro Harold

  const [lat, setLat] = useState("40.76078"); // Latitude de Salt Lake City, UTAH USA
  const [long, setLong] = useState("-111.89105"); // Longitud de Salt Lake City, UTAH USA

  const [currentWeatherC, setCurrentWeatherC] = useState(null); // Grados Celcius
  const [currentWeatherF, setCurrentWeatherF] = useState(null); //Grados Farenheit
  const [gradosC, setGradosC] = useState(`&units=metric`); // Por defecto, buscará en °Celcius
  const [gradosF, setGradosF] = useState(``); // Por defecto, buscará en °Fahrenheits
  const [UM, setUM] = useState("°C"); // Por defecto, mostrará en °Celcius
  const [sideBar, setSideBar] = useState(false); // Por defecto se oculta el SideBar
  const [pronosticC, setPronosticC] = useState(null);
  const [pronosticF, setPronosticF] = useState(null);

  const [cityC, setCityC] = useState(null); // Utilizada para guardar el estado de la ciudad

  useEffect(() => {
    if (lat === null && long === null) return; // Validando vacíos antes del Fetch

    console.log("Fetch de datos del clima");

    const getData = async () => {
      //const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIkey}`;  //Grados Farenheit
      // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}   //Prediccion 5 dias, 3 horas por dia x Lat Long
      // api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}         //Prediccion 5 dias, 3 horas por dia x Ciudad
      //api.openweathermap.org/data/2.5/weather?q=Tegucigalpa&appid={API key}   //Para busquedas por ciudad

      // Consumiendo API -> Grados Celcuis
      const URLC = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIkey}${gradosC}`; // Grados Celcius
      const resC = await fetch(URLC);
      const dataC = await resC.json();
      setCurrentWeatherC(dataC);

      // Consumiendo API -> Grados Fahrenheits
      const URLF = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIkey}${gradosF}`; // Grados Fahrenheits
      const resF = await fetch(URLF);
      const dataF = await resF.json();
      //console.log(dataF);
      setCurrentWeatherF(dataF);

      // Consumiendo API -> Grados Celcuis
      const URLCProno = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${APIkey}${gradosC}`; // Grados Celcius Pronostico
      const resCProno = await fetch(URLCProno);
      const dataCProno = await resCProno.json();
      setPronosticC(dataCProno);

      //console.log(pronosticC.list);
      //console.log(formatDate(dataCProno.list[0].dt_txt)) //Formato Fecha
      //console.log(dataCProno.list)

      // Consumiendo API -> Grados Fahrenheits
      const URLFProno = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${APIkey}${gradosF}`; // Grados Celcius Pronostico
      const resFProno = await fetch(URLFProno);
      const dataFProno = await resFProno.json();
      setPronosticF(dataFProno);

      if (cityC === null) {
      } else {
        // Busqueda por Ciudad

        // Consumiendo API -> Grados Celcuis
        const URLCityC = `https://api.openweathermap.org/data/2.5/weather?q=${cityC}&appid=${APIkey}${gradosC}`; // Grados Celcius  -  CITY
        const resCityC = await fetch(URLCityC);
        const dataCityC = await resCityC.json();
        const coordCityLatC = dataCityC?.coord.lat;
        const coordCityLonC = dataCityC?.coord.lon;
        setCurrentWeatherC(dataCityC);

        // Consumiendo API -> Grados Fahrenheit
        const URLCityF = `https://api.openweathermap.org/data/2.5/weather?q=${cityC}&appid=${APIkey}${gradosF}`; // Grados Celcius  -  CITY
        const resCityF = await fetch(URLCityF);
        const dataCityF = await resCityF.json();
        setCurrentWeatherF(dataCityF);

        //console.log(coordCityLatC, coordCityLonC);
        setLat(coordCityLatC);
        setLong(coordCityLonC);
        setCityC(dataCityC);
      }
    };
    getData();
  }, [lat, long, cityC]);

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
  const handleSearchLocation = (l) => {
    console.log("Buscar por medio de un lugar");
    setSideBar(!sideBar);
    if (l === null) return;
    // Validando Informacion desde el SideBar
    // console.log(l?.target.id);ñ
    // console.log(cityLocations[l.target.id - 1]?.ciudad)
    // console.log(cityLocations[l.target.id - 1]?.latitude)
    // console.log(cityLocations[l.target.id - 1]?.longitude)

    //Asignando nuevas lat y long
    const latit = cityLocations[l?.target?.id - 1]?.latitude;
    const longit = cityLocations[l?.target?.id - 1]?.longitude;
    if (latit == null || longit == null) {
      return;
    } else {
      setLat(latit);
      setLong(longit);
    }
  };

  // Funcion busqueda por ciudad
  const handleSearchCityLocation = (c) => {
    c.preventDefault();

    const texto = c.target[0].value;
    console.log(texto);
    setCityC(texto);
    handleSearchLocation();
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

  // Conversion Formato Fecha de hoy
  const formatDate = () => {
    const options = { weekday: "short", day: "numeric", month: "short" };
    const day = new Date();
    return day.toLocaleDateString("en-gb", options);
  };

  // Conversion Formato Fecha Especifico
  const formatDateSpecific = (fechas) => {
    const options = { weekday: "short", day: "numeric", month: "short" };
    const day = new Date(fechas);
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
        {sideBar && (
          <SideBar
            sideBar={sideBar}
            closeSideBar={handleSearchLocation}
            cityLocations={cityLocations}
            searchCityLocation={handleSearchCityLocation}
          />
        )}
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
                        um={UM}
                        dateTomorrow={formatDateSpecific(pronosticC?.list[5].dt_txt)}
                        imgDateTomorrow={pronosticC?.list[5].weather[0].icon}
                        tempDateTomorrow={pronosticC?.list[5].main.temp}

                        dateDay3={formatDateSpecific(pronosticC?.list[13].dt_txt)}
                        imgDate3={pronosticC?.list[13].weather[0].icon}
                        tempDate3={pronosticC?.list[13].main.temp}

                        dateDay4={formatDateSpecific(pronosticC?.list[21].dt_txt)}
                        imgDate4={pronosticC?.list[21].weather[0].icon}
                        tempDate4={pronosticC?.list[21].main.temp}

                        dateDay5={formatDateSpecific(pronosticC?.list[29].dt_txt)}
                        imgDate5={pronosticC?.list[29].weather[0].icon}
                        tempDate5={pronosticC?.list[29].main.temp}

                        dateDay6={formatDateSpecific(pronosticC?.list[37].dt_txt)}
                        imgDate6={pronosticC?.list[37].weather[0].icon}
                        tempDate6={pronosticC?.list[37].main.temp}
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
                        um={UM}
                        dateTomorrow={formatDateSpecific(pronosticF?.list[5].dt_txt)}
                        imgDateTomorrow={pronosticF?.list[5].weather[0].icon}
                        tempDateTomorrow={pronosticF?.list[5].main.temp}

                        dateDay3={formatDateSpecific(pronosticF?.list[13].dt_txt)}
                        imgDate3={pronosticF?.list[13].weather[0].icon}
                        tempDate3={pronosticF?.list[13].main.temp}

                        dateDay4={formatDateSpecific(pronosticF?.list[21].dt_txt)}
                        imgDate4={pronosticF?.list[21].weather[0].icon}
                        tempDate4={pronosticF?.list[21].main.temp}

                        dateDay5={formatDateSpecific(pronosticF?.list[29].dt_txt)}
                        imgDate5={pronosticF?.list[29].weather[0].icon}
                        tempDate5={pronosticF?.list[29].main.temp}

                        dateDay6={formatDateSpecific(pronosticF?.list[37].dt_txt)}
                        imgDate6={pronosticF?.list[37].weather[0].icon}
                        tempDate6={pronosticF?.list[37].main.temp}
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
