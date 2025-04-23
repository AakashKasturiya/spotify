import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
 const navigate =  useNavigate();
  return (
    <header className="w-full flex justify-between items-center font-semibold">
      <nav className="flex items-center gap-2">
        <img onClick={()=>navigate(-1)} className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_left}/>
        <img onClick={()=>navigate(1)} className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_right}/>
      </nav>
      <div className="flex items-center gap-4">
        <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block">Explore Premium</p>
        <p className="bg-black  py-1 px-3 rounded-2xl text-[15px] cursor-pointer text-white">Install App</p>
        <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">A</p>
      </div>
    </header>

  );
};
