import React, { useEffect, useState } from 'react';
// import { Link } from "react-router-dom";
import AmmenitiesCard from './AmmenitiesCard';
// import {UserContext} from "../../UserContext";

const Property = () => {
  const [files, setFiles] = useState([]);
  const [propertyName, setPropertyName] = useState('');
  const [location, setLocation] = useState('');
  const [amenities, setAmenities] = useState([]);
  const [kitchen, setKitchen] = useState(false);
  const [guestRoom, setGuestRoom] = useState(false);
  const [hotWater, setHotWater] = useState(false);
  const [parking, setParking] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [privatebathroom, setprivatebathroom] = useState(false);
  const [couplefriendly, setcouplefriendly] = useState(false);
  const [familyfrinedly, setfamilyfrinedly] = useState(false);
  const [price, setPrice] = useState(100);
  const [perks, setPerks] = useState([]);
  const [description, setDescription] = useState([]);
  const [roomnumber, setroomnumber] = useState(1);


  function handleChange(event) {
    setFiles([...event.target.files]);
  }

  useEffect(() => {
    setKitchen(false);
    setHotWater(false);
    setGuestRoom(false);
    setWifi(false);
    setParking(false);
    setprivatebathroom(false);
    setcouplefriendly(false);
    setfamilyfrinedly(false);
    const perksLower = perks.map((perk) => perk.toLowerCase()); // Convert perks to lowercase

    perksLower.forEach((perk) => {
      setKitchen(perk === "kitchen");
      setHotWater(perk === "hotwater");
      setGuestRoom(perk === "guestroom");
      setWifi(perk === "wifi");
      setParking(perk === "parking");
      setprivatebathroom(perk === "privatebathroom");
      setcouplefriendly(perk === "couplefriendly");
      setfamilyfrinedly(perk === "familyfrinedly");
    });
  }, [perks]);
  const sendProperty = async (e) => {
    e.preventDefault();
    console.log(perks);


    const propertyData = {
      name: propertyName,
      location,
      amenities,
      roomDetails: {
        kitchen,
        guestRoom,
        hotWater,
        parking,
        wifi,
        privatebathroom,
        couplefriendly,
        familyfrinedly
      },
      roomnumber,
      description,
      price
    };

    const propertyDataJSON = JSON.stringify(propertyData);
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`images${index}`, file);
    });
    formData.append('propertyData.json', propertyDataJSON);
    const baseUrl = process.env.REACT_APP_BASE_URL;
    console.log(formData);

    const response = await fetch(`${baseUrl}/property`, {
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

  function inputheader(text) {
    return (<p className="text-gray-500 text-sm">{text} </p>);
  }
  return (
    <div className="flex flex-col items-center justify-start w-full overflow-auto bg-gray-50_01">
      <form enctype="multipart/form-data" onSubmit={sendProperty} >
        <h2 className="text-center mt-2">Let's Create Property</h2>
        <div className="my-4">
          <label htmlFor="propertyName" className="text-1xl mt-4">Property Name</label>
          {inputheader("Enter the title of property helps in distinction")}
          <input
            type="text"
            id="propertyName"
            name="propertyName"
            placeholder='write here'
            value={propertyName}
            onChange={(e) => setPropertyName(e.target.value)}
            required
            className="border-b-2 border-gray-700 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-black"
          />
        </div>
        <div className="my-4">
          <label htmlFor="location" className="text-1xl mt-4">Location Name:</label>
          <p className="text-gray-500 text-sm">Input exact address of the property</p>
          <input
            type="text"
            id="location"
            placeholder='write here'
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="border-b-2 border-gray-700 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-black"
          />
        </div>

        <div className="my-4">
          <label htmlFor="roomnumber" className="text-1xl mt-4">Rooms</label>
          <p className="text-gray-500 text-sm">Input the number of Rooms</p>
          <input
            type="number"
            id="roomnumber"
            placeholder='write here'
            name="roomnumber"
            value={roomnumber}
            onChange={(e) => setroomnumber(e.target.value)}
            required
            className="border-b-2 border-gray-700 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-black"
          />
        </div>

        <div className="my-4">
          <label htmlFor="price" className="text-1xl mt-4">Price</label>
          <p className="text-gray-500 text-sm">price of property you want to keep</p>
          <input
            type="number"
            id="price"
            placeholder='write here'
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="border-b-2 border-gray-700 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-black"
          />
        </div>


        <div className="my-4">
          <label htmlFor="amenities">Amenities:</label>
          <p className="text-gray-500 text-sm">Select the ammenities that you have in your property</p>

          {/* Add more checkboxes for other amenities */}
          <AmmenitiesCard selected={perks} onChange={setPerks} />
          {/* Add more checkboxes for other amenities */}

          <div className="my-4">
            <label htmlFor="amenities" className="text-1xl mt-4">Additional Ammenities</label>
            <p className="text-gray-500 text-sm">additional ammenities your property have</p>
            <input
              type="text"
              id="amenities"
              placeholder='write here'
              name="amenities"
              value={amenities}
              onChange={(e) => setAmenities(e.target.value)}
              required
              className="border-b-2 border-gray-700 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-black"
            />
          </div>


        </div>
        <div className="my-4">
          <label htmlFor="images" className="text-1xl mt-4">Photos</label>
          <p className="text-gray-500 text-sm">upload photos of your property, try to upload of all rooms and from different angles</p>
          {/* <div className="mt-2 grid grid-cols-3 lg:grid-cols-6 md:grid-cols-3 ">
            <button className="border bg-transparent rounded-2xl p-8 text-2xl text-gray-600">Upload</button>
          </div> */}
          <div className="mt-2 grid grid-cols-3 lg:grid-cols-6 md:grid-cols-3 ">
            <input
              type="file"
              id="images"
              name="images"
              multiple
              onChange={handleChange}
              required
              className="border bg-transparent rounded-2xl p-8 text-2xl text-gray-600"
            />
          </div>
        </div>

        <div className="my-4">
          <label htmlFor="description" className="text-1xl mt-4">Description</label>
          <p className="text-gray-500 text-sm">What do You wanna tell other about your property</p>
          <textarea
            name="description"
            id="description"
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-32 pl-2 py-[12px] text-gray-600_02 font-semibold rounded border border-solid border-gray-700 focus:outline-none"
          />
        </div>
        <div className="mv3">
          <button
            type="submit"
            className="font-bold mb-5 rounded-md py-2 px-4 bg-transparent border border-black cursor-pointer hover:bg-light-gray w-full"
          >
            Create Property
          </button>
        </div>
      </form>
    </div>
  );
};

export default Property;

