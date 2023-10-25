function ImageTimeStatus({currentWeatherIcon}) {
  return (
    <>
      <div className="imgBackground_sideLeft">
        <img src="./img/Cloud-background.png" alt="imgBackground_sideLeft" />
      </div>
      <div className="imgTimeStatus">
        {/*<img src="src/assets/Shower.png" alt="" />*/}
        <img src={currentWeatherIcon} />
      </div>
    </>
  );
}

export default ImageTimeStatus;
