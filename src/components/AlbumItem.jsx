import React from "react";
import { useNavigate } from 'react-router-dom';

export const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();
  const albumName = name.replaceAll(" ","-");
  return (
    <div onClick={()=>navigate(`/album/${albumName}/${id}`)} className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
      <img className="rounded" src={image} alt="" />
      <p className="text-white font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};
