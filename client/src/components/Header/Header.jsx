// import React from "react";
// // import { CloseSVG } from "../../assets/images";
// import { Img, Heading, Text } from "..";
// import { Link } from 'react-router-dom';
// import { useContext, useEffect, useState } from "react";
// import { UserContext } from "../../UserContext";

// export default function Header({ ...props }) {
//   // const [searchBarValue1, setSearchBarValue1] = useState("");
//   const { setUserInfo, userInfo } = useContext(UserContext);
//   const [menuVisible, setMenuVisible] = useState(false);
//   const baseUrl = process.env.REACT_APP_BASE_URL;
//   useEffect(() => {
//     fetch(`${baseUrl}/auth/profile`, {
//       credentials: 'include',
//     }).then(response => {
//       response.json().then(userInfo => {
//         setUserInfo(userInfo);
//         // const col = userInfo.id;
//         // console.log(userInfo)
//       });
//     });
//   }, [setUserInfo, baseUrl]);
//   function logout() {
//     fetch(`${baseUrl}/auth/logout`, {
//       credentials: 'include',
//       method: 'POST',
//     });
//     setUserInfo(null);
//   }
//   useEffect(() => {
//     if (menuVisible) {
//       const timeoutId = setTimeout(() => setMenuVisible(false), 3000); // Close menu after 5 seconds
//       return () => clearTimeout(timeoutId); // Cleanup function to clear timeout on unmount
//     }
//   }, [menuVisible]);

//   const username = userInfo?.Username;
//   console.log(username)


//   return (
//     <header {...props}>
//       {/* Header container */}
//       <div className="flex justify-between items-center px-4 py-2 bg-white shadow-md">
//         {/* Icon and text */}
//         <div className="flex items-center space-x-2">
//           <img src="/images/img_real_estate_1.svg" alt="realestateone" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
//           <p className="text-lg sm:text-xl md:text-2xl font-bold">H&H</p>
//         </div>
  
//         {/* Menu items - horizontal scroll on mobile, consistent on laptop */}
//         <div className="flex-1 flex justify-center sm:justify-start overflow-x-auto md:overflow-visible space-x-4">
//           <div className="flex space-x-4">
//             <Link to="/" className="text-sm sm:text-base md:text-lg"><h6>Home</h6></Link>
//             <Link to="listing" className="text-sm sm:text-base md:text-lg"><h6>Listing</h6></Link>
//             <Link to="/agentlist" className="text-sm sm:text-base md:text-lg"><h6>Agents</h6></Link>
//             <Link to='/blogpage' className="text-sm sm:text-base md:text-lg"><h6>Blog</h6></Link>
//           </div>
//         </div>
  
//         {/* User icon and menu button - fixed on the right */}
//         <div className="flex items-center space-x-2 sm:space-x-4">
//           {/* Menu button */}
//           <div className="relative">
//             <button onClick={() => setMenuVisible(!menuVisible)} className="md:hidden">
//               <img src="/images/menu-burger-horizontal-svgrepo-com.svg" alt="Menu" className="w-6 h-6 sm:w-8 sm:h-8" />
//             </button>
//             {menuVisible && (
//               <div className="absolute right-0 top-full mt-2 w-48 bg-white shadow-lg p-4 rounded-md opacity-75">
//                 <Link to="/blog/create" className="block py-1">Write Blog</Link>
//                 <Link to="/property" className="block py-1">Add Property</Link>
//                 <Link to="/signup" className="block py-1">Register</Link>
//                 <button onClick={logout} className="block py-1">Logout</button>
//               </div>
//             )}
//           </div>
  
//           {/* Profile link */}
//           <Link to={username ? '' : '/login'} className="flex items-center space-x-2">
//             {!!username && <div className="text-sm sm:text-base">{username}</div>}
//             <img src="/images/profile-round-1342-svgrepo-com.svg" alt="User" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
  
  
// }






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
    {/* div contains the header item of my website */}
    <div className="grid gap-4 m-4 grid-cols-12">
  {/* contains icon and text  they should be fined in the screen */}
  <div className="flex flex-row col-span-3">
    <Link to="/" className="flex flex-row">
      <Img src="/images/img_real_estate_1.svg" alt="realestateone" className="h-8 w-8" />
      <Text as="p" className="h-8 w-8">H&H</Text>
    </Link>
  </div>

  {/* contains the menu items which I want to scroll horizontally in mobile while in laptop stay consistent */}
  <div className="flex flex-row justify-center px-2 col-span-6">
    <div className="px-2 sm:px-8">
      <Link to="listing">
        <Heading as="h6">Listing</Heading>
      </Link>
    </div>
    <div className="px-2 sm:px-8">
      <Link to="/agentlist">
        <Heading as="h6">Agents</Heading>
      </Link>
    </div>
    <div className="px-2 sm:px-8">
      <Link to='/blogpage'>
        <Heading as="h6">Blog</Heading>
      </Link>
    </div>
  </div>

  {/* Header menu with user icon and hamburger menu make it fixed in the right most part of the screen make them a bit smaller in the mobile */}
  <div className="flex flex-row justify-end pr-0 col-span-3 sm:pr-20">
    {/* Menu button */}
    <div className="pr-2">
      <button onClick={() => setMenuVisible(!menuVisible)} className="">
        <img src="/images/menu-burger-horizontal-svgrepo-com.svg" alt="Menu" 
        className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>
      {/* Menu options */}
      {menuVisible && (
         <div className="absolute right-1 sm:right-3 mt-2 bg-white rounded shadow-lg">
         {/* Added opacity-75 for translucency */}
         <div className="p-2">
           <Link to="/blog/create" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Write Blog</Link>
           <Link to="/property" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Add Property</Link>
           <Link to="/signup" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Register</Link>
           <button onClick={logout} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</button>
         </div>
       </div>
      )}
    </div>

    {/* Profile link */}
    <Link to={username ? '' : '/login'} 
    className="flex flex-col-reverse pt-0 mt-0 ">
      {!!username && <div>{username}</div>}
      <img src="/images/profile-round-1342-svgrepo-com.svg" 
      className="h-4 w-4 ml-1 mr-1 mb-0 pb-0" 
      alt="User"  />
    </Link>
  </div>
</div>

    </header>
  );
}


//{/*   <p className="text-lg font-bold text-gray-800">Listing</p> */}

// scroll

//  <div className="inline-block px-4 py-2">
//     <Link to="/" className="block"><Heading as="h6">Home</Heading></Link>
//   </div>
//   <div className="inline-block px-4 py-2">
//     <Link to="/listing" className="block"><Heading as="h6">Listing</Heading></Link>
//   </div>
//   <div className="inline-block px-4 py-2">
//     <Link to="/agentlist" className="block"><Heading as="h6">Agents</Heading></Link>
//   </div>
//   <div className="inline-block px-4 py-2">
//     <Link to="/blogpage" className="block"><Heading as="h6">Blog</Heading></Link>
//   </div>
// </div>


// <div className="absolute bg-yellow-50 top-full mt-1 w-48 text-black-800 border border-gray-300 rounded-md shadow-lg "> {/* Added opacity-75 for translucency */}
//                 <Link to="/blog/create" className="block px-4 py-2 text-sm hover:bg-gray-100 focus:outline-none focus:bg-gray-100">Write Blog</Link>
//                 <Link to="/property" className="block px-4 py-2 text-sm hover:bg-gray-100 focus:outline-none focus:bg-gray-100">add property</Link>
//                 <Link to="/signup" className="block px-4 py-2 text-sm hover:bg-gray-100 focus:outline-none focus:bg-gray-100">Register</Link>
//                 <button onClick={logout} className="block px-4 py-2 text-sm text-left w-full hover:bg-gray-100 focus:outline-none focus:bg-gray-100">Logout</button>
//               </div>
