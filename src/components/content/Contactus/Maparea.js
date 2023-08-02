// import React, { useState } from "react";
// import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";

// const markers = [
//   {
//     id: 1,
//     name: "Chicago, Illinois",
//     position: { lat: 41.881832, lng: -87.623177 }
//   },
//   {
//     id: 2,
//     name: "Denver, Colorado",
//     position: { lat: 39.739235, lng: -104.99025 }
//   },
//   {
//     id: 3,
//     name: "Los Angeles, California",
//     position: { lat: 34.052235, lng: -118.243683 }
//   },
//   {
//     id: 4,
//     name: "New York, New York",
//     position: { lat: 40.712776, lng: -74.005974 }
//   }
// ];

// function Map() {
//   const [activeMarker, setActiveMarker] = useState(null);

//   const handleActiveMarker = (marker) => {
//     if (marker === activeMarker) {
//       return;
//     }
//     setActiveMarker(marker);
//   };

//   const handleOnLoad = (map) => {
//     setTimeout(()=>{
//         const bounds = new google.maps.LatLngBounds();
//         markers.forEach(({ position }) => bounds.extend(position));
//         map.fitBounds(bounds);
//     },5000)

//   };

//   return (
//     <GoogleMap
//       onLoad={handleOnLoad}
//       onClick={() => setActiveMarker(null)}
//       mapContainerStyle={{ width: "100vw", height: "100vh" }}
//     >
//       {markers.map(({ id, name, position }) => (
//         <Marker
//           key={id}
//           position={position}
//           onClick={() => handleActiveMarker(id)}
//         >
//           {activeMarker === id ? (
//             <InfoWindow onCloseClick={() => setActiveMarker(null)}>
//               <div>{name}</div>
//             </InfoWindow>
//           ) : null}
//         </Marker>
//       ))}
//     </GoogleMap>
//   );
// }

// export default Map;

import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { getMap } from '../../../redux/action/Contactaction';
import react, { useEffect } from 'react'

import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { InfoWindow } from 'react-google-maps';

function MapComponent(props) {

  const [selectedMarker, setSelectedMarker] = useState(null);
  const [selectedElement, setSelectedElement] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);
  const [showInfoWindow, setInfoWindowFlag] = useState(true);

  const handleMarkerClick = (props, marker) => {
    alert('marker');
    console.log("marker", marker);
    setSelectedMarker(marker);

  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMap());
  }, []);


  const map_list = useSelector((state) => state?.ContactReducer?.mapList);
  const mapStyles = {
    width: '100%',
    height: '400px',
    position: 'unset',
  };


  function show_address(id) {
    let icon = document.getElementById("icon")
    map_list.forEach(element => {
      if (element.id == id) {
        console.log(icon)
        const para = document.createElement("p");
        para.innerText = element.address;
        //icon.appendChild(para);
        // alert(icon)
      }
    });

  }

  return (
    <>
      <Map
        google={props.google}
        zoom={9}
        style={mapStyles}
        initialCenter={{ lat: 28.5355, lng: 77.3910 }}
      >

        {map_list?.map((item) => {
          return (
            <Marker key={item.id}
              position={{ lat: item.latitude, lng: item.longitude }}
              title={item.address}
              //  onClick={handleMarkerClick}
              onClick={(props, marker) => {
                setSelectedElement(item);
                setActiveMarker(marker);
              }}
            />
          )
        }
        )}
        {/* {selectedElement ? (
          <InfoWindow
            visible={showInfoWindow}
            marker={activeMarker}
            onCloseClick={() => {
              setSelectedElement(null);
            }}
          >
            <div>
              <h1>'hello'</h1>
            </div>
          </InfoWindow>
        ) : null} */}
      </Map>

    </>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyATba3_zqs3oQkfsForYOV8dtPazVc4Xug', // Replace with your actual API key
})(MapComponent);
