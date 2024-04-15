import React from "react";
// import { CloseSVG } from "../../assets/images";
import { Img, Heading, Text } from "..";
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";

export default function Header({ ...props }) {
  // const [searchBarValue1, setSearchBarValue1] = useState("");
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [menuVisible, setMenuVisible] = useState(false);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  useEffect(() => {
    fetch(`${baseUrl}/profile`, {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        // const col = userInfo.id;
        // console.log(userInfo)
      });
    });
  }, [setUserInfo, baseUrl]);
  function logout() {
    fetch(`${baseUrl}/logout`, {
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
          <Img src="/images/img_real_estate_1.svg" alt="realestateone" className="h-10 w-10" />
          <Text as="p" className="mt-[5px]">
            H&H
          </Text>
        </div>
        <div className="flex flex-row justify-between items-center w-[41%]">
          <div className="flex flex-row w-[64%] gap-10">
            <div className="flex flex-row justify-start items-start w-1/4 gap-1.5">
              <Link to="/"><Heading as="h6">Home</Heading></Link>
            </div>
            <div className="flex flex-row justify-start items-start w-1/4 gap-1.5">
              <Link to="listing"><Heading as="h6">Listing</Heading></Link>
            </div>
            <div className="flex flex-row justify-start items-start w-1/4 gap-1.5">
              <Link to="/agentlist"><Heading as="h6">Agents</Heading></Link>
            </div>
            
          </div>
          <div className="flex flex-row justify-start items-start w-1/4 gap-1.5"><Link to='/blogpage'><Heading as="h6">Blog</Heading></Link></div>
          
        </div>



        {/* header meanu of user icon and hambergure menu */}
        <div className="flex flex-row justify-start items-center gap-2.5 w-48 border border-gray-300 rounded-full">
          {/* Menu button */}
          <div className="relative">
            <button onClick={() => setMenuVisible(!menuVisible)} className="flex items-center gap-2 py-2 px-4 focus:outline-none">
              <img src="/images/menu-burger-horizontal-svgrepo-com.svg" alt="Menu" width="24" height="24" />
            </button>
            {/* Menu options */}
            {menuVisible && (
              <div className="absolute top-full mt-1 w-48 bg-white text-gray-800 border border-gray-300 rounded-md shadow-lg">
                <button onClick={logout} className="block px-4 py-2 text-sm hover:bg-gray-100 focus:outline-none focus:bg-gray-100">Logout</button>
                <Link to="/createblog" className="block px-4 py-2 text-sm hover:bg-gray-100 focus:outline-none focus:bg-gray-100">Write Blog</Link>
                <Link to="/property" className="block px-4 py-2 text-sm hover:bg-gray-100 focus:outline-none focus:bg-gray-100">add property</Link>
              </div>
            )}
          </div>

          {/* Profile link */}
          {/* <Link to={username ? '/account' : '/login'} className="flex items-center gap-2 py-2 px-4 text-white rounded-full hover:bg-gray-600 focus:outline-none focus:bg-gray-600"> */}
            <div className="overflow-hidden rounded-full">
              <img src="/images/profile-round-1342-svgrepo-com.svg" alt="User" width="24" height="24" />
            </div>
            {!!username && <div>{username}</div>}
          {/* </Link> */}
        </div>

      </div>
    </header>
  );
}
