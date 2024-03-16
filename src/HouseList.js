import React, { useState, useEffect } from 'react';

const HouseList = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://ancient-taiga-31359.herokuapp.com/api/houses');
      const data = await response.json();
      setHouses(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2>House List</h2>
      <ul>
        {houses.map(house => (
          <li key={house.id}>
            {house.name} - {house.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HouseList;

