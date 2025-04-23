import React, { useRef,useEffect } from "react";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import { DisplayAlbum } from "./DisplayAlbum";
import { albumsData } from "../assets/assets";

export const Display = () => {
  const displayRef = useRef(null);
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";

  const bgColor = albumsData[Number(albumId)].bgColor;

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    }else{
    displayRef.current.style.background = `#121212`;
    }
  });

  return (
    <>  
    <section ref={displayRef} className="w-[100%] m-2 px-6 pt-4 rounded  text-white overflow-auto lg:[75%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album/Top-50-Global/:id" element={<DisplayAlbum path="Top-50-Global"/>} />
        <Route path="/album/Top-50-India/:id" element={<DisplayAlbum path="Top-50-India"/>} />
        <Route path="/album/Trending-India/:id" element={<DisplayAlbum path="Trending-India"/>} />
        <Route path="/album/Trending-Global/:id" element={<DisplayAlbum path="Trending-Global"/>} />
        <Route path="/album/Mega-Hits/:id" element={<DisplayAlbum path="Mega-Hits" />} />
        <Route path="/album/Happy-Favorites/:id" element={<DisplayAlbum path="Happy-Favorites"/>} />
      </Routes>
    </section>
</>
  );
};
