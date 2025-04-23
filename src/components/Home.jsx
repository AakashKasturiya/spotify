import React from "react";
import {AlbumItem} from "./AlbumItem";
import { albumsData, songsData } from "../assets/assets";
import { SongItem } from "./SongItem";

export const Home = () => {
  return (
    <div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">All</p>
        <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer">Music</p>
        <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer">Podcasts</p>
      </div>
      <div className="mb-4">
        <h1 className="my-5 text-white font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto scroll-hidden">
          {albumsData.map((item, index) => (
            <AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 text-white font-bold text-2xl">Today's Biggest Hits</h1>
        <div className="flex overflow-auto scroll-hidden">
          {songsData.map((item, index) => (
            <SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>
          ))}
        </div>
      </div>
    </div>
  );
};
