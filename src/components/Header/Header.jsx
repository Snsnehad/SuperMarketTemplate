// import React ,{useState} from 'react'
// import './Header.css'
// import MenuIcon from "@mui/icons-material/Menu";

// const Header = () => {
//   return (
//     <>
//       <nav className="navBar">
//         <div className="logo">
//           <div className="wh">SUPER</div>
//           <div className="yl">MARKET</div>
//         </div>
//         <div className="menu">
//           <MenuIcon className="menuIcon"  />
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Header

// Header.js

import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navBar">
      <div className="logo">
        <div className="wh">SUPER</div>
        <div className="yl">MARKET</div>
      </div>
      <div className="menu">
        <MenuIcon
          className="menuIcon"
          style={{ color: "white" }}
          onClick={toggleMenu}
        />

        {/* Navigation links in a dropdown menu */}
        {isMenuOpen && (
          <div className="try">
            <div className="dropdownMenu">
              <Link to="/" className="list">
                Home
              </Link>
              <Link to="/employee" className="list">
                Employee
              </Link>
              <Link to="/table" className="list">
                Table
              </Link>
              <Link to="/eliminate_employee" className="list">
                Delete
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
