import React from "react";
import { Heading, Img, Text } from "..";
import {Link} from "react-router-dom";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="flex flex-row justify-start items-center w-full mt-[5px] gap-[34px] sm:gap-px mx-3 sm:mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center justify-start w-[25%] gap-[43px]">
          <div className="flex flex-row justify-start items-start w-full gap-[11px]">
            <Img src="/images/img_real_estate_1.svg" alt="realestateone" className="h-10 w-10" />
            <Text as="p" className="mt-[5px]">
              H&H
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-full gap-7">
            <Heading as="h6" className="!leading-[160%]">
              Lane 6, city
              <br />
              state, country
            </Heading>
            <div className="flex flex-col items-start justify-center gap-2">
              <Heading as="h6" className="mt-px">
                +(123) 456-7890
              </Heading>
              <Heading as="h6">info@mail.com</Heading>
            </div>
            <div className="flex flex-row justify-start w-full gap-3">
              <a href="https://www.linkedin.com/in/ashutosh-rawat-897b89216"><Img src="/images/img_icon_linked_in.svg" alt="iconlinkedin" className="h-[30px] w-[30px]" /></a>
              <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                <Img src="/images/img_icon_youtube.svg" alt="iconyoutube_one" className="h-[30px] w-[30px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:flex sm:flex-row justify-between items-center w-[70%]">
          <div className="flex flex-col items-start justify-start w-[19%] sm:gap-[15px]">
            <Heading size="md" as="h6">
              Features</Heading>
            <Link to="/home"><Heading as="h6">Home</Heading></Link>
              <Heading as="h6">Contact</Heading>
            {/* <div className="flex flex-col items-start justify-start w-full gap-[15px]">
            </div> */}
          </div>
          <div className="flex flex-col items-start justify-start w-[19%] sm:gap-[15px]">
            <Heading size="md" as="h6">
              Info</Heading>
            <Link to="/listing"><Heading as="h6">Listing</Heading></Link> 
              <Link to="/agentlist"><Heading as="h6"> Agent List  </Heading></Link>
            
            {/* <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[15px]">
             </div> */}
          </div>
          <div className="flex flex-col items-start justify-start w-[19%] sm:gap-[15px]">
            <Heading size="md" as="h6">
              BLOGS{" "} </Heading>
              <Link to="/blogpage"> <Heading as="h6" className="mt-0.5">   Blog </Heading></Link>
            {/* <div className="flex flex-col items-start justify-center w-full gap-[15px]">
            </div> */}
          </div>
          <div className="flex flex-col items-start justify-start w-[19%] sm:gap-[15px]">
            <Heading size="md" as="h6">
              Others
            </Heading>
            <div className="flex flex-col items-start justify-center w-full sm:gap-[15px]">
             <Link to="/login"> <Heading as="h6" className="mt-0.5">Log in</Heading></Link>
              <Heading as="h6">Create Account</Heading>
            </div>
          </div>
        </div>
      </div>
      <Heading as="h6" className="ml-[45px]">
        ©All rights reservedlolo.
      </Heading>
    </footer>
  );
}
