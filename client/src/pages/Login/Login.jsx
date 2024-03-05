import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button,  Input, Text } from "../../components";

import { useState } from 'react';
// import { TextArea } from '../../components/TextArea';  

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changestate = ()=>{  
     console.log(password,"pssss");
    // navigate('/');
  
  };
  return (
    <>
      <Helmet>
        <title>Ashutosh's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-[full] h-[100%] gap-[100px] overflow-auto bg-gray-50_01">
            <div className="flex flex-col items-center justify-start w-full gap-11 max-w-[1200px]">
              <div className="flex flex-col items-center justify-start w-full pt-0.5 gap-[15px]">
                <h1> hellooooo</h1>
              </div>
              <div className="flex flex-row justify-start items-center w-[40%] gap-[50px] h-[100%] p-[23px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[20px]">
                {/* jthe login card */}
                <div className="flex flex-col items-center justify-start w-full ml-[25px] gap-10">
                    <Heading size="2xl" as="h2" className="tracking-[-0.56px]">
                      Login
                    </Heading>
                    {/* email and passsword down here  */}
                    <div className="flex flex-col items-center justify-start w-full gap-3">
                      <Input
                        type="email"
                        name="email"
                        placeholder="username / Email Address"
                        prefix={<Img src="images/img_icon_24px_email.svg" alt="icon / 24px / email" />}
                        className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <Input
                        type="password"
                        name="Password"
                        placeholder="Password"
                        prefix={<Img src="images/img_icon_20px_call.svg" alt="icon / 24px / call" />}
                        className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>                  
                  <Button onClick={changestate} size="2xl" className="w-full font-semibold">
                    Login
                  </Button>
                </div>
                {/* <div className="h-[534px] w-px my-[25px] bg-blue_gray-100_01" /> */}
              </div>
            </div>
      </div>
    </>
  );
}
