import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import LandingPage from "pages/LandingPage/LandingPage";
import Listing from "pages/Listing/Listing";
import ListingMapView from "pages/ListingMapView/ListingMapView";
import AgentProfile from "pages/AgentProfile/AgentProfile";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from "./App";
// const ProjectRoutes = () => {
//   let element = useRoutes([
//     { path: "dhiwise-dashboard", element: <Home /> },
//     { path: "*", element: <NotFound /> },
//     {
//       path: "/",
//       element: <LandingPage />,
//     },
//     {
//       path: "listing",
//       element: <Listing />,
//     },
//     {
//       path: "listingmapview",
//       element: <ListingMapView />,
//     },
//     {
//       path: "agentprofile",
//       element: <AgentProfile />,
//     },
//   ]);

//   return element;
// };
const router = createBrowserRouter(  createRoutesFromElements(
  <Route path="/" element={<App />}>        
    <Route path="" element={<LandingPage />} />
    <Route path="listing" element={<Listing />} />
    <Route path="listingmapview" element={<ListingMapView />} />
    <Route path="agentprofile" element={ <AgentProfile />} />
    <Route path="*" element={<Home />} />
  </Route>
)
)


export default router;
