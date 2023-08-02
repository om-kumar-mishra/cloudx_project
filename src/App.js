import './App.css';
// import ScriptTag from 'react-script-tag';
import { useLoadScript } from "@react-google-maps/api";
import React, { useEffect } from 'react';

import Home from './components/content/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from './components/content/Services/Services';
import Industry from './components/content/Industry/Industry';
import Contactus from './components/content/Contactus/Contactus';
import Privacypolicy from './components/content/Privacypolicy/Privacypolicy';
import Gallery from './components/content/Gallery/Gallery';
import Images from './components/content/Gallery/Images/Images';
import Videos from './components/content/Gallery/Videos/Videos';
import Events from './components/content/Gallery/Events/Events';
import EventGallery from './components/content/Gallery/Events/Eventgallery/EventGallery';
import ScrollToTop from './Scrolltotop';
import HappyCustomers from './components/content/HappyCustomers/HappyCustomers';
function App() {

  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: "AIzaSyATba3_zqs3oQkfsForYOV8dtPazVc4Xug" // Add your API key
  // });
 
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" exact element={<Home />}>
            </Route>

            <Route path="/services" exact element={<Services />}>
            </Route>

            <Route path="/industry" exact element={<Industry />}>
            </Route>

            <Route path="/gallery" exact element={<Gallery />}>
            </Route>

            <Route path="/gallery-images" exact element={<Images />}>
            </Route>

            <Route path="/gallery-videos" exact element={<Videos />}>
            </Route>

            <Route path="/gallery-events" exact element={<Events />}>
            </Route>

            <Route path="/:id"  element={<EventGallery />}>
            </Route>

            <Route path='/happycustomer'  element={<HappyCustomers />}>
            </Route>

            <Route path="/contactus" exact element={<Contactus />}>
            </Route>

            <Route path="/privacy-policy" exact element={<Privacypolicy />}>
            </Route>

          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;
