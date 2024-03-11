import React from "react";
import { CloseSVG } from "../../assets/images";
import {  Input, Img, Heading, Text } from "..";
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";

export default function Header({ ...props }) {
  const [searchBarValue1, setSearchBarValue1] = useState("");
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [menuVisible, setMenuVisible] = useState(false);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        // const col = userInfo.id;
        console.log(userInfo)
      });
    });
  }, [setUserInfo]);
  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.Username;

  return (
    <header {...props}>
      <div className="flex flex-row justify-between items-center w-full mx-auto h-20 max-w-[1200px]">
        <div className="flex flex-row justify-start items-start gap-[11px]">
          <Img src="images/img_real_estate_1.svg" alt="realestateone" className="h-10 w-10" />
          <Text as="p" className="mt-[5px]">
            H&H
          </Text>
        </div>
        <div className="flex flex-row justify-between items-center w-[41%]">
          <div className="flex flex-row w-[64%] gap-10">
            <div className="flex flex-row justify-start items-start w-1/4 gap-1.5">
              <Link to="/"><Heading as="h6">Home</Heading></Link>
              <Img src="images/img_arrow_down.svg" alt="home_two" className="h-4 w-4 mt-0.5" />
            </div>
            <div className="flex flex-row justify-start items-start w-1/4 gap-1.5">
              <Link to="listing"><Heading as="h6">Listing</Heading></Link>
              <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-4 w-4" />
            </div>
            <div className="flex flex-row justify-start items-start w-1/4 gap-1.5">
              <Link to="/agentlist"><Heading as="h6">Agents</Heading></Link>
              <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-4 w-4" />
            </div>
          </div>
          <Link to="property">
            <Heading as="h6" className="text-center">
              Property{" "}
            </Heading></Link>
          <Link to='/blogpage'><Heading as="h6">Blog</Heading></Link>
        </div>
        <div className="flex flex-row justify-start items-center w-[19%] gap-2.5">
          <Input
            size="xs"
            shape="square"
            name="search"
            placeholder="Search"
            value={searchBarValue1}
            onChange={(e) => setSearchBarValue1(e)}
            prefix={<Img src="/images/img_icon_24px_search.svg" alt="icon / 24px / search" className="cursor-pointer" />}
            suffix={
              searchBarValue1?.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue1("")} height={24} width={24} fillColor="#191919ff" />
              ) : null
            }
            className="w-[55%] gap-2 text-gray-900 font-bold"
          />

          <div className="relative">
            <button
              onClick={() => setMenuVisible(!menuVisible)}
              className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
            {menuVisible && (
              <div className="absolute top-full mt-1 w-48 bg-white text-gray-800 border border-gray-300 rounded-md shadow-lg">
                {/* Additional options go here */}
                <button onClick={logout} className="block px-4 py-2 text-sm">Logout</button>
                <Link to="/create" className="block px-4 py-2 text-sm">Create</Link>
              </div>
            )}
          </div>

          
          <Link to={username ? '/account' : '/login'} className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 ">
            <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
              </svg>
            </div>
            {!!username && (
              <div>
                {username}
              </div>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
