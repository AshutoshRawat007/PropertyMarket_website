import React from "react";
import { CloseSVG } from "../../assets/images";
import { Button, Input, Img, Heading, Text } from "..";
import {Link} from 'react-router-dom';
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../UserContext";

export default function Header({ ...props }) {
  const [searchBarValue1, setSearchBarValue1] = useState("");
  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);
  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.Fname;

  return (
    <header {...props}>
      <div className="flex flex-row justify-between items-center w-full mx-auto h-20 max-w-[1200px]">
        <div className="flex flex-row justify-start items-start gap-[11px]">
          <Img src="images/img_real_estate_1.svg" alt="realestateone" className="h-10 w-10" />
          <Text as="p" className="mt-[5px]">
            Relasto
          </Text>
        </div>
        <div className="flex flex-row justify-between items-center w-[41%]">
          <div className="flex flex-row w-[64%] gap-10">
            <div className="flex flex-row justify-start items-start w-1/4 gap-1.5">
              <Link to = "/"><Heading as="h6">Home</Heading></Link>
              <Img src="images/img_arrow_down.svg" alt="home_two" className="h-4 w-4 mt-0.5" />
            </div>
            <div className="flex flex-row justify-start items-start w-1/4 gap-1.5">
              <Link to="Listing"><Heading as="h6">Listing</Heading></Link>   
              <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-4 w-4" />
            </div>
            <div className="flex flex-row justify-start items-start w-1/4 gap-1.5">
              <Link to="/agentlist"><Heading as="h6">Agents</Heading></Link>
              <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-4 w-4" />
            </div>
          </div>
          <Heading as="h6" className="text-center">
            Property{" "}
          </Heading>
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
            prefix={<Img src="images/img_icon_24px_search.svg" alt="icon / 24px / search" className="cursor-pointer" />}
            suffix={
              searchBarValue1?.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue1("")} height={24} width={24} fillColor="#191919ff" />
              ) : null
            }
            className="w-[55%] gap-2 text-gray-900 font-bold"
          />
          <nav>
          {username && (
          <>
            <Link to="/create">hi {username}</Link>
            <button onClick={logout}>Logout </button>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
          </>
        )}
        </nav>
        </div>
      </div>
    </header>
  );
}
