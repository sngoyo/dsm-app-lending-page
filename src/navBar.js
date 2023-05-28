import React from "react";
import { BsSearch } from "react-icons/bs#BsSearch";
import { FaRegUser } from "react-icons/fa";

const NavBar = () => {
    return (
      <div className="flex flex-row justify-between mt-6">
         <div className="logo ml-10 text-white font-bold">LOGO</div>
         <nav>
             <ul className="nav flex flex-row space-x-10 mr-10 text-white font-bold">
                 <li><a href="">HOME</a></li>
                 <li><a href="">HOLIDAYS</a></li>
                 <li><a href="">DESTINATIONS</a></li>
                 <li><a href="">FRIGHTS</a></li>
                 <li><a href="">OFFERS</a></li>
                 <li><a href="">CONTACTS</a></li>
                 <li><span><BsSearch /></span></li>
                 <li><span><FaRegUser /></span></li>
             </ul>
         </nav>
      </div>
    );
};

export default NavBar;

