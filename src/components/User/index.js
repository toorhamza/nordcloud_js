import React from "react";
import Form from "./Form"

const UserComponent = ({ userCoordinates, setUserCoordinates }) => {
  return (
    <div>
      <h2>User Coordinates</h2>
      <ol>
        {userCoordinates && userCoordinates.map((element, i) => (
          <li key={i}>{`[${element[0]}, ${element[1]}]`}</li>
        ))}
      </ol>
      <Form userCoordinates={userCoordinates} setUserCoordinates={setUserCoordinates}/>
    </div>
  );
};

export default UserComponent;
