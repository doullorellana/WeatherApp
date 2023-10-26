function SideBar({ Sidebar, closeSideBar, cityLocations, searchCityLocation }) {
  //console.log(cityLocations[3].ciudad);
  //https://api.openweathermap.org/data/2.5/weather?q=tegucigalpa&appid=3b6c125c1daf193d106da991d91da4cd
  //https://api.openweathermap.org/data/2.5/forecast?q=tegucigalpa&appid=3b6c125c1daf193d106da991d91da4cd

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className={Sidebar ? "sidebar sidebar--open" : "sidebar"}>
          <div className="closeSideBar">
            <button onClick={closeSideBar}>X</button>
          </div>
          <div className="formSearchLocation">
            <form onSubmit={searchCityLocation}>
              <input className="inputSearchLocation" type="text" placeholder="ciudad, país"/>
              <button id="btnSearch" type="submit">Search</button>
            </form>
          </div>
          {cityLocations &&
            cityLocations.map((value, key) => {
              // {console.log(value, ": ",key)}
              // {console.log(value.ciudad)}
              return (
                <>
                  <div id={value?.id} key={key}>
                    <li id={value?.id} onClick={closeSideBar}>
                      {value?.ciudad}
                    </li>
                  </div>
                </>
              );
            })}
        </div>
      </nav>
    </>
  );
}

export default SideBar;
