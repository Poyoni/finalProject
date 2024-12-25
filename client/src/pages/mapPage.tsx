// import React from 'react'
// import MapComponent from '../components/Map/MapComponent'
// import FilterSelect from '../components/FilterSelect/FilterSelect'
// import Navbar from '../components/Navbar/Navbar'
// import EventForm from '../components/EventForm/EvevtForm'
// import './mapPage.css'
// import { ThemeProvider } from '@emotion/react'
// import  theme  from '../../src/theme'
// import GraphComponent from '../components/Gtaph/GraphComponent'


// const MapPage: React.FC = () => {
//   const [currentComponent, setCurrentComponent] = useState<null | "Component2" | "Component3">(null);

//   return (
//     <ThemeProvider theme={theme}>
//       <div className='mapPage'>
//         <div className='navbar'>
//         {currentComponent === null && <Navbar setCurrentComponent={setCurrentComponent} />}

//         {/* <Navbar /> */}
//         </div>
//         <div className='center'>
//         <div className='mapAndGraph'>
//           <div className='map'>
//           {currentComponent === "Component2" && (
//         <MapComponent goBack={() => setCurrentComponent(null)} />
//           // <MapComponent />
//           </div>
//           <div className='graph'>
//             <GraphComponent />
//           </div>
//         </div>
//         <div className='eventDetails'>
//                 {currentComponent === "Component3" && (
//         <EventForm goBack={() => setCurrentComponent(null)} />
//           // <EventForm />
//           </div> 
//           <div className='filterSelect'>
//           <FilterSelect />
//           </div>
//         </div>
//       </div>
//     </ThemeProvider>
//   )
// }

// export default MapPage;

import React, { useState } from "react";
import MapComponent from "../components/Map/MapComponent";
import FilterSelect from "../components/FilterSelect/FilterSelect";
import Navbar from "../components/Navbar/Navbar";
import EventForm from "../components/EventForm/EvevtForm";
import "./mapPage.css";
import { ThemeProvider } from "@emotion/react";
import theme from "../../src/theme";
import GraphComponent from "../components/Gtaph/GraphComponent";

const MapPage: React.FC = () => {
  const [currentComponent, setCurrentComponent] = useState<null | "EventDetails" | "FilterSelect">(null);

  return (
    <ThemeProvider theme={theme}>
      <div className="mapPage">
        {/* Navbar תמיד מוצג */}
        <div className="navbar">
          <Navbar setCurrentComponent={setCurrentComponent} />
        </div>

        {/* MapComponent ו-GraphComponent תמיד מוצגים */}
        <div className="center">
          <div className="mapAndGraph">
            <div className="map">
              <MapComponent />
            </div>
            <div className="graph">
              <GraphComponent />
            </div>
          </div>

          {/* תנאי רינדור עבור EventForm ו-FilterSelect */}
          <div className="details">
            {currentComponent === "EventDetails" && (
              <div className="eventDetails">
                <EventForm goBack={() => setCurrentComponent(null)} />
              </div>
            )}
            {currentComponent === "FilterSelect" && (
              <div className="filterSelect">
                <FilterSelect />
              </div>
            )}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MapPage;
