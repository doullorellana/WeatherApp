function SideLeft({ currentWeatherIcon, temperature2, um, currentWeatherMain , formatFecha, currentWeatherName, currentWeatherCountry}) {
  return (
    <>
      <div className="imgBackground_sideLeft">
        <img src="./img/Cloud-background.png" alt="imgBackground_sideLeft" />
      </div>
      <div className="imgTimeStatus">
        {/*<img src="src/assets/Shower.png" alt="" />*/}
        <img src={currentWeatherIcon } />
      </div>
      <div className="statusTemperature">
        <h1>
          <>{temperature2}</>
        </h1>
        <h4>{um}</h4>
      </div>
      <div className="statusClima">
        <h3>{currentWeatherMain}</h3>
      </div>
      <div className="txtDate">
        <h3>

              Today{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height=".2em"
                viewBox="0 0 512 512"
                fill="#88869D"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
              </svg>{" "}
              {formatFecha}

        </h3>
      </div>
      <div className="txtLocation">
        <h3>
              <img src="./img/location.svg" /> {currentWeatherName},{" "}
              {currentWeatherCountry}
        </h3>
      </div>
    </>
  );
}

/*
<div className="imgBackground_sideLeft">
            <img
              src="./img/Cloud-background.png"
              alt="imgBackground_sideLeft"
            />
          </div>
          <div className="imgTimeStatus">
           
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
*/

export default SideLeft;
