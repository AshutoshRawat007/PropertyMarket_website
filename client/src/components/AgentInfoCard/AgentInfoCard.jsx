// AgentInfoCard.js
import React from 'react';
import { Button, Img, Heading, RatingBar, } from "..";
import { Link } from "react-router-dom";

const AgentInfoCard = ({ name, userid, image }) => {

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {image ? (
        <Img
          src={image}
          alt="image"
          className="w-[282px] h-40 rounded-tr-[10px] rounded-tl-[10px] object-cover"
        />
      ) : (
        <Img
          src="images/img_icon_24px_user.svg"
          alt="image"
          className="w-[282px] rounded-tr-[10px] rounded-tl-[10px] object-cover"
        />
      )}
      <div className="flex flex-row justify-center w-full p-[13px] rounded-bl-[10px] rounded-br-[10px] border-blue_gray-100_01 border border-solid bg-white-A700">
        <div className="flex flex-col items-start justify-start w-[95%] gap-[7px] mx-1.5">
          <p className="font-bold">{name}</p>
          <div className="flex flex-row justify-start items-center gap-3.5 py-0.5">
            <RatingBar value={1} isEditable={true} size={16} className="flex justify-between w-24" />
            <Heading as="h6">4.5 review</Heading>
          </div>

          <Link to={'/agentprofile/' + userid}>
            <Button color="blue_gray_100_01" variant="outline" className="w-full font-semibold">

              View Profile
            </Button></Link>

        </div>
      </div>
    </div>
  );
};

export default AgentInfoCard;
