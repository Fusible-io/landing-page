import React, { useState } from "react";
import FusibleLogo from "./assets/Fusible-logo.png";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  let menu1;

  if (showMenu) {
    menu1 = (
      <div className="MobNav">
        <CgClose
          style={{ position: "absolute", right: 25, top: 20 }}
          size={24}
          onClick={() => setShowMenu(false)}
        />
        <ul className="MobNavItem">
          <li>Exchange</li>
          <li>Explorer</li>
          <li>Bridge</li>
          <li>Staking</li>
          <li>Developers</li>
          <li>Community</li>
          <li>Blog</li>
        </ul>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="Navbar_Container">
        <div className="Nav_Right">
          <img src={FusibleLogo} alt="Fusible Logo" />

          <div className="Nav1">
            <ul className="Nav_Right">
              <li>Exchange</li>
              <li>Explorer</li>
              <li>Bridge</li>
              <li>Staking</li>
            </ul>
          </div>
        </div>
        <div className="Nav2">
          <ul className="Nav_Right">
            <li>Developers</li>
            <li>Community</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="mobIcon">
          <HiMenu size={24} onClick={() => setShowMenu(true)} />

          {menu1}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
