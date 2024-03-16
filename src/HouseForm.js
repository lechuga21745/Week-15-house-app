import React, { useState } from 'react';

const HouseForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, address });
    setName('');
    setAddress('');
  };

  return (
    <div>
      <h2>Add House</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={event => setAddress(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add House</button>
      </form>
    </div>
  );
};

export default HouseForm;
