import React, { useState } from "react";
import Form from "./Form";

const LinkStationComponent = ({ linkStations, setLinkStations }) => {

  
  return (
    <div>
      <h2>Link Stations</h2>
      <ol>
        {linkStations &&
          linkStations.map((element, i) => (
            <li key={i}>{`[${element[0]}, ${element[1]}] with Reach of ${element[2]}`}</li>
          ))}
      </ol>
      <Form linkStations={linkStations} setLinkStations={setLinkStations}/>
    </div>
  );
};

export default LinkStationComponent;
