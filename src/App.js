import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import data from "./data.json";
import Header from "./component/Header";
import Hero from "./component/Hero";

function App() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 45.4211,
    longitude: -75.6983,
    zoom: 12,
  });

  const [selected, setselected] = useState();

  return (
    //     <ReactMapGL
    //       {...viewport}
    //       mapStyle= 'mapbox://styles/mapbox/outdoors-v11'
    //       mapboxApiAccessToken={
    //         "pk.eyJ1IjoiZXZlcmdyZWVueCIsImEiOiJja3F2a2RsNHgwZmVuMnVyeWpoYXY4cmh4In0.6pfK932kVY3YUGAcf1WcKA"
    //       }
    //       onViewportChange={(nextViewport) => setViewport(nextViewport)}
    //     >
    //       {data.features.map((i) => (
    //         <Marker
    //           latitude={i.geometry.coordinates[1]}
    //           longitude={i.geometry.coordinates[0]}
    //           // offsetLeft={-20}
    //           // offsetTop={-10}
    //           key={i.properties.ID}
    //         >
    //           <button
    //           className="bg-red-200 text-center"
    //             onClick={(e) => {
    //               e.preventDefault();
    //               setselected(i);

    //               console.log(i)

    //             }}
    //           >

    // {i.properties.NAME}
    //             <img
    //               width="30"
    //               src="https://res.cloudinary.com/evergreenx/image/upload/v1625794156/hospital_m8vxbz.svg"
    //               alt={"icon"}
    //             />
    //           </button>
    //         </Marker>
    //       ))}

    //       {selected ? (<Popup   latitude={selected.geometry.coordinates[1]}
    //           longitude={selected.geometry.coordinates[0]}>

    // {selected.properties.NAME}

    // <address>
    // {selected.properties.ADDRESS}

    // </address>
    //       </Popup>):null}
    //     </ReactMapGL>

    <div className="bg-hero-pattern bg-cover bg-no-repeat font-sansx w-full ">
  
  <div className="container">
  <Header />

<Hero />
  </div>
  
  
    </div>
  );
}

export default App;
