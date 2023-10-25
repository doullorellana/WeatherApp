function FooterSideLeft({formatFecha, currentWeatherName, currentWeatherCountry}) {
  return (
    <>
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

export default FooterSideLeft;
