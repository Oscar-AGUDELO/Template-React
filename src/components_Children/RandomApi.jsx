import React, { useState, useEffect } from "react";
import axios from "axios";

const RandomApi = () => {
  const [vehicle, setVehicle] = useState({});
  const [click, setClick] = useState(1);
  const API = "https://random-data-api.com/api/vehicle/random_vehicle";

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const response = await axios.get(API);
        setVehicle(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVehicle();
  }, [click]);
  const handleClick = () => {
    setClick(click + 1)
    console.log(click)
  }
  return (
    <div>
      <h2>Random API - vehicle</h2>
      <p>{vehicle.make_and_model}</p>
      <button onClick={handleClick}>Click here</button>
    </div>
  );
};

export default RandomApi;
