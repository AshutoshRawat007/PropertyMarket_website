import React from "react";
import ReactDOM from 'react-dom/client'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import { createRoot } from "react-dom/client";
import App from "./App";
// import router from "./Routes";
import "./styles/tailwind.css";
import "./styles/index.css";
import "./styles/font.css";
import Home from "pages/Home";
// import NotFound from "pages/NotFound";
import LandingPage from "pages/LandingPage/LandingPage";
import Listing from "pages/Listing/Listing";
import ListingMapView from "pages/ListingMapView/ListingMapView";
import AgentProfile from "pages/AgentProfile/AgentProfile";
import AgentList from "pages/AgentList/AgentList";
import PropertyDetails from "pages/PropertyDetails/PropertyDetails";
import ContactPage from "pages/ContactPage/ContactPage";
import Login from "pages/Login/Login";
import SignUp from "pages/SignUp/SignUp";
import BlogPage from "pages/BlogPage/BlogPage";
import BlogDetails from "pages/BlogDetails/BlogDetails";
import Property from "pages/Property/Property";

import {UserContextProvider} from "./UserContext";

const router = createBrowserRouter(createRoutesFromElements(    
    <Route path="/" element={<App />}>        
      <Route path="" element={<LandingPage />} />
      <Route path="login" element={<Login />} />
      <Route path="SignUp" element={<SignUp/>}/>
      <Route path="listing" element={<Listing />} />
      <Route path="listingmapview" element={<ListingMapView />} />
      <Route path="agentprofile/:id" element={ <AgentProfile />} /> 
      <Route path="agentlist" element={<AgentList />} />
      <Route path="blogdetails" element={<BlogDetails />} />
      <Route path="blogpage" element={<BlogPage />} />      
      <Route path="propertydetails" element={<PropertyDetails />} />
      <Route path="contactpage" element={<ContactPage />} />  
      <Route path="property" element={<Property />} />
      <Route path="*" element={<Home />} />
    </Route>

  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <UserContextProvider>
    <RouterProvider router={router} />
    </UserContextProvider>
    </React.StrictMode>
)
  