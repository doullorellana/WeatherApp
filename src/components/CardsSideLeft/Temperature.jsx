function Temperature({temperature2, um}) {
  return (
    <div className="statusTemperature">
      <h1>
        <>{temperature2}</>
      </h1>
      <h4>{um}</h4>
    </div>
  );
}

export default Temperature;
