import React from "react";
import image from "./assets/mylogo.jpg";
import { NavLink } from "react-router-dom";
import Slider from "./Slider";
import { useNavigate } from "react-router-dom";
import Destinations from "./Destinations";

function Header() {
  const navigate = useNavigate();
  const handleLoginButtonClick = () => {
    alert(`Clicked Login`);
  };

  return (
    <div className="bg-[#008080] py-1 mb-[1px] max-sm:py-3 px-3 flex flex-row max-sm:px-5 justify-between items-center">
      <div className="flex items-center justify-center md:justify-start max-sm:hidden">
        <img src={image} alt="logo" className="w-[7rem] h-auto rounded-full" />
      </div>
      <Slider />
      <div className=" font-sans max-sm:hidden text-md font-semibold flex justify-center space-x-15 md:space-x-4">
        <NavLink
          to="/layout/home"
          className={({ isActive }) =>
            `nav-button ${isActive ? "text-black" : "text-white"}`
          }
        >
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/layout/packages"
          className={({ isActive }) =>
            `nav-button ${isActive ? "text-black" : "text-white"}`
          }
        >
          <span>Packages</span>
        </NavLink>
        <NavLink
          to="/layout/team"
          className={({ isActive }) =>
            `nav-button ${isActive ? "text-black" : "text-white"}`
          }
        >
          <span>Team</span>
        </NavLink>
        <NavLink
          to="/layout/about"
          className={({ isActive }) =>
            `nav-button ${isActive ? "text-black" : "text-white"}`
          }
        >
          <span>About</span>
        </NavLink>
      </div>
      <div className="items-center">
        <Destinations />
        <div className="w-[2rem] h-[2rem] rounded-full bg-slate-100"></div>
      </div>
    </div>
  );
}

export default Header;
