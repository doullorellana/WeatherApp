function SideBar({ Sidebar, closeSideBar, cityLocations }) {
  //console.log(cityLocations[3].ciudad);
  return (
    <>
      <div className={Sidebar ? "sidebar sidebar--open" : "sidebar"}>
        <div className="closeSideBar">
          <button onClick={closeSideBar}>X</button>
        </div>
        {cityLocations.map((value, key) => {
          // {console.log(value, ": ",key)}
          // {console.log(value.ciudad)}
          return (
            <>
              <div id={value?.id} key={key}>
                <li id={value?.id} onClick={closeSideBar}>{value?.ciudad}</li>
              </div>
            </>
          );
        })}
        ;
      </div>
    </>
  );
}

export default SideBar;
