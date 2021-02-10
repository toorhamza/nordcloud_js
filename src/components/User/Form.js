import React, {useState} from "react";

const Form = ({ userCoordinates, setUserCoordinates }) => {

    const [x, setX] = useState(null);
    const [y, setY] = useState(null);

    const handleSubmit = (e)=> {
      e.preventDefault()
      const newUser = [x, y]

      setUserCoordinates([...userCoordinates, newUser])
      
    }


  return (
    <div>
    <form onSubmit={handleSubmit}>
        <label>Coordinates:</label>
        <input  type="number" required value={x} onChange={(e)=> setX(e.target.value)} />
        <input  type="number" required value={y} onChange={(e)=> setY(e.target.value)} />
        <input type="submit" value="Add New User Coordinate" />
            </form>
    
    </div>
  );
};

export default Form;
