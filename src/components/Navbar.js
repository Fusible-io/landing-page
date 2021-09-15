import React from "react";
import FusibleLogo from "./assets/Fusible-logo.png";

const Navbar = () => {
  return (
    <div className="container">
      <div className="Navbar_Container">
        <div className="Nav_Right">
          <img src={FusibleLogo} alt="Fusible Logo" />
          <ul className="Nav_Right">
            <li>Exchange</li>
            <li>Explorer</li>
            <li>Bridge</li>
            <li>Staking</li>
          </ul>
        </div>
        <div>
          <ul className="Nav_Right">
            <li>Developers</li>
            <li>Community</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
