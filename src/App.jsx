import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Player } from './components/Player';
import { Display } from './components/Display';
import { useContext } from 'react';
import { PlayerContext } from './context/PlayerContext';

function App() {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <>
      <main className="h-screen bg-black">
            <div className="h-[90%] flex">
              <Sidebar />
              <Display />
            </div>
            <Player /> 
        <audio ref={audioRef} src={track.file} preload="auto"></audio>
      </main>
    </>
  );
}

export default App;
