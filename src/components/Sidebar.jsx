import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/spotify_logo.png";

export const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className="bg-[#121212] h-full rounded hidden lg:flex flex-col justify-start">
      {/* Navigation */}
      <div onClick={()=>navigate('/')} className="flex items-center gap-3 pl-8 py-4 cursor-pointer">
        <img className="w-6" src={assets.home_icon} alt="Home icon" />
        <p className="text-white font-bold">Home</p>
      </div>
      <div className="flex items-center gap-3 pl-8 py-4 cursor-pointer">
        <img className="w-6" src={assets.search_icon} alt="Search icon" />
        <p className="text-white font-bold">Search</p>
      </div>

      {/* Library Section */}
      <div className="flex-1 bg-[#121212] mt-4 rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="Library icon" />
            <p className="text-white font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="Arrow icon" />
            <img className="w-5" src={assets.plus_icon} alt="Add icon" />
          </div>
        </div>

        {/* Playlist Box */}
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1">
          <h1 className="text-white">Create your first playlist</h1>
          <p className="text-white font-light">It's easy, we'll help you.</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            Create Playlist
          </button>
        </div>

        {/* Podcast Box */}
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1 mt-4">
          <h1 className="text-white">Let’s find some podcasts to follow</h1>
          <p className="text-white font-light">We’ll keep you updated on new episodes.</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            Browse Podcasts
          </button>
        </div>
      </div>
    </aside>
  );
};
