
import './Navbar.css'
import { Button } from '@mui/material';

// const Navbar = () => {
  
//   return (
//     <div className="navbar">
//       <Button variant="contained" color="secondary" className='button'>
//           בקשת מידע
//       </Button>
//       <Button variant="contained" color="secondary" className='button'>
//         עריכת אירוע
//       </Button>
//     </div>
//   )
// }

// export default Navbar

import React from "react";

interface Props {
  setCurrentComponent: (component: "EventDetails" | "FilterSelect") => void;
}

const Navbar: React.FC<Props> = ({ setCurrentComponent }) => {
  return (
    <div>
      <button onClick={() => setCurrentComponent("EventDetails")}>הצג פרטי אירוע</button>
      <button onClick={() => setCurrentComponent("FilterSelect")}>הצג מסנן</button>
    </div>
  );
};

export default Navbar;

