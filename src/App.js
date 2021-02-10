import React from "react";

import useGetData from "./hooks/useGetData";

import LinkStationComponent from "./components/LinkStation"
import UserComponent from "./components/User"
import ResultComponent from "./components/Result"

function App() {
  const [linkStations, setLinkStations] = useGetData("linkstations");
  const [userCoordinates, setUserCoordinates] = useGetData("user");

  return <div>
    <LinkStationComponent linkStations={linkStations} setLinkStations={setLinkStations}/>
    <UserComponent userCoordinates={userCoordinates} setUserCoordinates={setUserCoordinates}/>
    <ResultComponent userCoordinates={userCoordinates} linkStations={linkStations} />
  </div>;
}

export default App;
