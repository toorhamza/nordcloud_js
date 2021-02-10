import React, {useState} from "react";

const Form = ({ linkStations, setLinkStations }) => {

    const [x, setX] = useState(null);
    const [y, setY] = useState(null);
    const [reach, setReach] = useState(null);

    const handleSubmit = (e)=> {
      e.preventDefault()
      const newStation = [x, y, reach]

      setLinkStations([...linkStations, newStation])
      
    }


  return (
    <div>
    <form onSubmit={handleSubmit}>
        <label>Coordinates:</label>
        <input  type="number" required value={x} onChange={(e)=> setX(e.target.value)} />
        <input  type="number" required value={y} onChange={(e)=> setY(e.target.value)} />
        <label>Reach:</label>

        <input  type="number" required value={reach} onChange={(e)=> setReach(e.target.value)} />
        <input type="submit" value="Add New Link Station" />
            </form>
    
    </div>
  );
};

export default Form;
