import React, { useContext } from "react";
import "./Navbar.css";
import { AppContext } from "./Context";

const Navbar = () => {
    const { setIsLogIn } = useContext(AppContext); 
  return (
    <div className="navbar">
      <div className="logo">
        <h2>ReactContext</h2>
      </div>
      <div className="nav-link">
        <li className="li">Product</li>
        <li className="li">Home</li>
        <li className="li">About</li>
        <li className="li">Support</li>
              <button onClick={() => {
                  setIsLogIn(false
                  )
              }} className="btn">Logout</button>
          </div>
          <span style={{color:"yellow", marginRight:"80px"}}>sunny </span>
    </div>
  );
};

export default Navbar;
