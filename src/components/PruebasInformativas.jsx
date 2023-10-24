function PruebasInformativas() {
  return (
    <>
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
    </>
  );
}

export default PruebasInformativas;
