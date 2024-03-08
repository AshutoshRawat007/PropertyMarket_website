import React, { useState,useContext,useEffect } from 'react';
// import {UserContext} from "../../UserContext";

const Property = () => {
  const [files, setFiles] = useState([]);
  const [propertyName, setPropertyName] = useState('');
  const [location, setLocation] = useState('');
  const [amenities, setAmenities] = useState('');
  const [numberOfRooms, setNumberOfRooms] = useState(0);
  const [kitchen, setKitchen] = useState(false);
  const [guestRoom, setGuestRoom] = useState(false);
  const [hotWater, setHotWater] = useState(false);
  const [price, setPrice] = useState(100);

  
  function handleChange(event) {
    setFiles([...event.target.files]);
  }
  const sendProperty = async (e) => {    
    e.preventDefault();        
    const propertyData = {
      name: propertyName,
      location,
      amenities: amenities.split(',').map((item) => item.trim()),
      roomDetails: {
        numberOfRooms,
        kitchen,
        guestRoom,
        hotWater,
      },
      price
    };
    
    const propertyDataJSON = JSON.stringify(propertyData);
    
    // Create FormData object

    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`images${index}`, file);
    });
    // Append property details (JSON string)
    formData.append('propertyData.json', propertyDataJSON);
    const response = await fetch('http://localhost:4000/property', {
      method: 'POST',
      body: formData,
      credentials: 'include' // Send FormData object for image and JSON data
      // headers: { 'Content-Type': 'multipart/form-data' },
    });
    
    if (response.status === 200) {
      alert('Property uploaded successfully!');
    } else {
      alert('Property upload failed. Check the server response for details.');
    }
      console.log(propertyData);
  
    }
  return (
    <form enctype="multipart/form-data" onSubmit={sendProperty} className="max-w-xl mx-auto p-4 bg-gradient-to-b from-custom-2 to-transparent border-3 border-dark-gray shadow-2xl rounded-md">
      <h2 className="text-center">Create Property</h2>

      {/* Your form inputs go here */}
      <div className="my-4">
        <label htmlFor="propertyName">Property Name:</label>
        <input type="text" id="propertyName" name="propertyName" value={propertyName} onChange={(e) => setPropertyName(e.target.value)} required className="border-b-2 border-gray-700 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-black" />
      </div>
        <div className="my-4">
        <label htmlFor="location">locatio  Name:</label>
        <input type="text" id="location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} required className="border-b-2 border-gray-700 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-black" />
      </div>
      <div className="my-4">
        <label htmlFor="amenities">ammenities Name:</label>
        <input type="text" id="amenities" name="amenities" value={amenities} onChange={(e) => setAmenities(e.target.value)} required className="border-b-2 border-gray-700 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-black" />
      </div>
      <div className="my-4">
        <label htmlFor="images">images Name:</label>
        <input type="file" id="images" name="images" multiple  onChange={handleChange} required className="border-b-2 border-gray-700 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-black" />
      </div>

      {/* Add other form inputs based on your schema */}
      

      <div className="mv3">
        <button type="submit" className="font-bold rounded-md py-2 px-4 bg-transparent border border-black cursor-pointer hover:bg-light-gray w-full">
          Create Property
        </button>
      </div>
    </form>
  );
};

export default Property;
