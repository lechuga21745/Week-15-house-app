import React, { useState, useEffect } from 'react';
import HouseList from './HouseList';
import HouseForm from './HouseForm';
import HouseItem from './HouseItem';


// usestate to manage the houses state
const App = () => {
  const [houses, setHouses] = useState([]);
// fetch the list of houses from the API when using useeffect
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
//add houses
  const handleAddHouse = async newHouse => {
    try {
      const response = await fetch('https://ancient-taiga-31359.herokuapp.com/api/houses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newHouse),
      });
      const data = await response.json();
      setHouses([...houses, data]);
    } catch (error) {
      console.error('Error adding house:', error);
    }
  };
//we delete houses
const handleDeleteHouse = async id => {
  try {
    await fetch(`https://ancient-taiga-31359.herokuapp.com/api/houses/${id}`, {
      method: 'DELETE',
    });
    setHouses(prevHouses => prevHouses.filter(house => house.id !== id));
  } catch (error) {
    console.error('Error deleting house:', error);
  }
};

// we pass these functions as props to hosue form and hosue item components. 
  return (
    <div>
      <h1>Houses CRUD App</h1>
      <HouseList houses={houses} />
      <HouseForm onSubmit={handleAddHouse} />
      {houses.map(house => (
  <HouseItem key={house.id} house={house} onDelete={() => handleDeleteHouse(house.id)} />
))}

    </div>
  );
};

export default App;
