import React from "react";
import useFindBestStation from "../../hooks/useFindBestStation";

const ResultComponent = ({ userCoordinates, linkStations }) => {
  const [findLinkStationWithMaxPower] = useFindBestStation();

  return (
    <div>
      <h2>Results</h2>
      {userCoordinates && linkStations && userCoordinates.map((userCoord, i) => {
        const result = findLinkStationWithMaxPower(userCoord, linkStations);

        return <div key={i}>{result}</div>;
      })}
    </div>
  );
};

export default ResultComponent;
