import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { albumsData, assets,songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

export const DisplayAlbum = ({path}) => {

  const { id } = useParams();
  const album = albumsData[id];

  const {playWidthId} = useContext(PlayerContext);

  if (!album) {
    return <div className="text-white">Album not found.</div>;
  }

  return (
    <>
    <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
      <img className="w-48 rounded" src={album.image} alt="" />
      <div className="flex flex-col">
        <p className="text-white">Playlist</p>
        <h2 className="text-white text-5xl font-bold mb-4 md:text-7xl">{album.name}</h2>
        <h4 className="text-lime-100">{album.desc}</h4>
        <div className="flex gap-2">
        <img className="inline-block w-5 h-5" src={assets.spotify_logo} alt="" />
        <p className="text-white"><b>Spotify</b> &bull; 1,32,154 likes<b> &bull; 50 songs,</b>about 2hr 30mins</p>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="" />
      </div>
      <hr />
      {songsData.filter((item)=>item.category === `${path}` || path === "Top-50-Global").map((item, index) => (
        <div
          key={index}
          onClick={()=>playWidthId(item.id)}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b]"
        >
          <p className="text-white">
            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
            <img className="inline w-10 mr-5" src={item.image} alt="" />
            {item.name.length > 10 ? item.name.slice(0,11) + "...": item.name}
          </p>
          <p className="text-[15px]"> {item.album ? item.album : (item.name.length > 10 ? item.name.slice(0, 11) + "..." : item.name)}</p>
          <p className="text-[15px] hidden sm:block">5 days ago</p>
          <p className="text-[15px] text-center">{item.duration}</p>
        </div>
      ))}
      </>
  );
};
