import React from 'react'
function AmmenitiesCard({selected, onChange}) {
  function handleCbClick(ev) {

    console.log(ev.target.name);
    const { checked, name } = ev.target;
    if (checked) {
      onChange([...selected, name]);
    } else {
      onChange([...selected.filter(selectedName => selectedName !== name)]);
    }
  }
  return (
    <>
      <div className="grid mt-2 gap-2 grid-cols-2 md:grid-col-3 lg:grid-cols-6 ">
        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input type="checkbox"
            name="hotwater"
            onChange={handleCbClick}
            className="mr-2"
          />
          <img src="/images/person-enjoying-jacuzzi-hot-water-bath-svgrepo-com.svg" alt="Girl in a jacket" width="30" height="30" />
          <span>hot water</span>
        </label >

        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input type="checkbox"
            name="kitchen"
            onChange={handleCbClick}
            className="mr-2"
          />
          <img src="/images/kitchen-cabinets-2-svgrepo-com.svg" alt="Girl in a jacket" width="30" height="30" />
          <span>Kitchen</span>
        </label>


        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input type="checkbox"
            name="guestroom"
            onChange={handleCbClick}
            className="mr-2"
          />
          <img src="/images/bbq-svgrepo-com.svg" alt="Girl in a jacket" width="30" height="30" />
          <span>Guest Room</span>
        </label>

        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input type="checkbox"
            name="parking"
            onChange={handleCbClick}
            className="mr-2"
          />
          <img src="/images/parking-garage-transportation-car-parking-svgrepo-com.svg" alt="Girl in a jacket" width="30" height="30" />
          <span>Parking</span>
        </label>

        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input type="checkbox"
            name="privatebathroom"
            onChange={handleCbClick}
            className="mr-2"
          />
          <img src="/images/parking-garage-transportation-car-parking-svgrepo-com.svg" alt="Girl in a jacket" width="30" height="30" />
          <span>Private Bathroom</span>
        </label>

        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input type="checkbox"
            name="couplefriendly"
            onChange={handleCbClick}
            className="mr-2"
          />
          <img src="/images/parking-garage-transportation-car-parking-svgrepo-com.svg" alt="Girl in a jacket" width="30" height="30" />
          <span>Couple friendly</span>
        </label>

        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input type="checkbox"
            name="familyfrinedly"
            onChange={handleCbClick}
            className="mr-2"
          />
          <img src="/images/parking-garage-transportation-car-parking-svgrepo-com.svg" alt="Girl in a jacket" width="30" height="30" />
          <span>safe for family</span>
        </label>


        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input type="checkbox"
            name="wifi"
            onChange={handleCbClick}
            className="mr-2"
          />
          <img src="/images/wifi-high-svgrepo-com.svg" alt="Girl in a jacket" width="30" height="30" />
          <span>wifi</span>
        </label>
      </div>

    </>
  );
}

export default AmmenitiesCard;