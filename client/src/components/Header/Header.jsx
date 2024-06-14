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
    fetch(`${baseUrl}/auth/profile`, {
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
    fetch(`${baseUrl}/auth/logout`, {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }
  useEffect(() => {
    if (menuVisible) {
      const timeoutId = setTimeout(() => setMenuVisible(false), 3000); // Close menu after 5 seconds
      return () => clearTimeout(timeoutId); // Cleanup function to clear timeout on unmount
    }
  }, [menuVisible]);

  const username = userInfo?.Username;
  console.log(username)


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
            <div className="flex flex-row justify-start items-start w-[25%] gap-1.5">
              <Link to="/"><Heading as="h6">Home</Heading></Link>
            </div>
            <div className="flex flex-row justify-start items-start w-[25%] gap-1.5">
              <Link to="listing"><Heading as="h6">Listing</Heading></Link>
            </div>
            <div className="flex flex-row justify-start items-start w-[25%] gap-1.5">
              <Link to="/agentlist"><Heading as="h6">Agents</Heading></Link>
            </div>
          </div>
          <div className="flex flex-row justify-start items-start w-[25%] gap-1.5"><Link to='/blogpage'>
            <Heading as="h6">Blog</Heading></Link></div>
        </div>

        {/* Header menu with user icon and hamburger menu */}
        <div className="flex flex-row justify-start items-center gap-2.5 w-48 border border-gray-300 rounded-full">
          {/* Menu button */}
          <div className="relative">
            <button onClick={() => setMenuVisible(!menuVisible)} className="flex items-center gap-2 py-2 px-4 focus:outline-none">
              <img src="/images/menu-burger-horizontal-svgrepo-com.svg" alt="Menu" width="24" height="24" />
            </button>
            {/* Menu options */}
            {menuVisible && (
              <div className="absolute bg-yellow-50 top-full mt-1 w-48 text-black-800 border border-gray-300 rounded-md shadow-lg "> {/* Added opacity-75 for translucency */}
                <Link to="/blog/create" className="block px-4 py-2 text-sm hover:bg-gray-100 focus:outline-none focus:bg-gray-100">Write Blog</Link>
                <Link to="/property" className="block px-4 py-2 text-sm hover:bg-gray-100 focus:outline-none focus:bg-gray-100">add property</Link>
                <Link to="/signup" className="block px-4 py-2 text-sm hover:bg-gray-100 focus:outline-none focus:bg-gray-100">Register</Link>
                <button onClick={logout} className="block px-4 py-2 text-sm text-left w-full hover:bg-gray-100 focus:outline-none focus:bg-gray-100">Logout</button>
              </div>
            )}
          </div>

          {/* Profile link */}
          {/* <div classname="w-full"> */}
          <Link to={username ? '' : '/login'} className="w-[30%] flex items-center gap-2 py-2 px-4 text-white rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-300">
            {!!username && <div>{username}</div>}

            <img src="/images/profile-round-1342-svgrepo-com.svg"
              className="justify-self-end hover:bg-gray-600 focus:bg-gray-600"
              alt="User" width="14" height="14" />

          </Link>
          {/* </div> */}

        </div>
      </div>
    </header>
  );
}











// import { Fragment } from 'react'
// import { Popover, Transition } from '@headlessui/react'
// import {
//   ArrowPathIcon,
//   ChartPieIcon,
//   CursorArrowRaysIcon,
//   FingerPrintIcon,
//   SquaresPlusIcon,
// } from '@heroicons/react/24/outline'

// const solutions = [
//   { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
//   { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
//   { name: 'Security', description: "Your customers' data will be safe and secure", href: '#', icon: FingerPrintIcon },
//   { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
//   { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
// ]
// const callsToAction = [
//   { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
//   { name: 'Contact sales', href: '#', icon: PhoneIcon },
// ]

// export default function Example() {
//   return (
//     <Popover className="relative">
//       <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
//         <span>Solutions</span>
//       </Popover.Button>

//       <Transition
//         as={Fragment}
//         enter="transition ease-out duration-200"
//         enterFrom="opacity-0 translate-y-1"
//         enterTo="opacity-100 translate-y-0"
//         leave="transition ease-in duration-150"
//         leaveFrom="opacity-100 translate-y-0"
//         leaveTo="opacity-0 translate-y-1"
//       >
//         <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
//           <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
//             <div className="p-4">
//               {solutions.map((item) => (
//                 <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
//                   <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
//                     <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
//                   </div>
//                   <div>
//                     <a href={item.href} className="font-semibold text-gray-900">
//                       {item.name}
//                       <span className="absolute inset-0" />
//                     </a>
//                     <p className="mt-1 text-gray-600">{item.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
//               {callsToAction.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
//                 >
//                   <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
//                   {item.name}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </Popover.Panel>
//       </Transition>
//     </Popover>
//   )
// }