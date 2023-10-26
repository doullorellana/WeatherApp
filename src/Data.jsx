import App from "./App";

function Data() {
  // Arreglo conteniendo informacion de long y lat de ciudades del mundo
  const cityLocations = [
    {
      id: "1",
      ciudad: "Comayagua, Honduras",
      latitude: "14.4500000",
      longitude: "-87.6333300",
    },
    {
      id: "2",
      ciudad: "Tokio, Japon",
      latitude: "35.6895",
      longitude: "139.69171",
    },
    {
      id: "3",
      ciudad: "India",
      latitude: "20.593684",
      longitude: "78.96288",
    },
    {
      id: "4",
      ciudad: "Buenos Aires, Argentina",
      latitude: "-34.61315",
      longitude: "-58.37723",
    },
    {
      id: "5",
      ciudad: "Vitoria Gasteiz, España",
      latitude: "42.84998",
      longitude: "-2.67268",
    },
    {
      id: "6",
      ciudad: "Jerusalen, Israel",
      latitude: "31.76904",
      longitude: "35.21633",
    },
    {
      id: "7",
      ciudad: "Londres, Inglaterra",
      latitude: "51.51279",
      longitude: "-0.09184",
    },
    {
      id: "8",
      ciudad: "Barcelona, España",
      latitude: "41.38879",
      longitude: "2.15899",
    },
    {
      id: "9",
      ciudad: "Long Beach, California, USA",
      latitude: "33.76696",
      longitude: "-118.18923",
    },
    {
      id: "10",
      ciudad: "Moscú, Rusia",
      latitude: "55.75222",
      longitude: "37.61556",
    },
  ];

  return (
    <>
        <App cityLocations={cityLocations}/>
    </>
  );
}

export default Data;
