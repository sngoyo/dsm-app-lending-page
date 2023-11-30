import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs#BsSearch";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import {useMediaQuery } from "react-responsive";
import "./navBar.css";


//Responsive NavBar
const NavBar = () => {
    const [isVisible, setIsVisible] = useState(false);

    //MediaQuery hook used only for mobile
     const isMobile = useMediaQuery({
        query: "(max-width: 480px)"
    });

    //Hidding and unhidding menu in mobile
    const toggleSideBar = () => setIsVisible(prev => !prev);


    return (
        <div className="navbarContainer">
   {/*  Opening and closing button on the nav bar */}
              { isMobile && (
            <div className="mobileresponsiveButtonContainer">
                <div className="logo ml-5 text-white font-bold z-1">LOGO</div>
                <button className="buttonContainer"
                   onClick={toggleSideBar}
                >
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </button>
            </div>
               )}

   {/* Unhidding and hidding navbar for mobile menu when app is opened in Mobile phone */}
            {isMobile && isVisible && (
                <div className="navContainer flex flex-row justify-between mt-6 z-1">

                <nav>
                    <ul className="nav flex flex-row space-x-10 mr-10 text-black font-bold">
                        <li className="homeClass"><Link to="/" onClick={toggleSideBar}>HOME</Link></li>
                        <li><a href="">HOLIDAYS</a></li>
                        <li><a href="">DESTINATIONS</a></li>
                        <li><a href="">FRIGHTS</a></li>
                        <li><a href="">OFFERS</a></li>
                        <li className="contact"><Link to="/contacts" onClick={toggleSideBar}>CONTACTS</Link></li>
                        <li><span><BsSearch /></span></li>
                        <li><span><FaRegUser /></span></li>
                    </ul>
                </nav>

             </div>
            )}

 {/* Opening navbar for desktop when web is opened in Desktop or laptops */}
     {!isMobile && (
      <div className="navContainer flex flex-row justify-between mt-6 z-1">
         <div className="logo ml-10 text-white font-bold z-1">LOGO</div>
         <nav>
             <ul className="nav flex flex-row space-x-10 mr-10 text-black font-bold">
                 <li><Link to="/">HOME</Link></li>
                 <li><a href="">HOLIDAYS</a></li>
                 <li><a href="">DESTINATIONS</a></li>
                 <li><a href="">FRIGHTS</a></li>
                 <li><a href="">OFFERS</a></li>
                 <li className="contact"><Link to="/contacts">CONTACTS</Link></li>
                 <li><span><BsSearch /></span></li>
                 <li><span><FaRegUser /></span></li>
             </ul>
         </nav>

      </div>
       )}
      </div>
    );
};

export default NavBar;

