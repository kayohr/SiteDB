import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineRollback } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { Howl } from 'howler';
import '../services/Style.css';
import { FaPlay } from 'react-icons/fa';


const Dia = () => {
  const [previewUrl, setPreviewUrl] = useState('');
  const [sound, setSound] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);

    if (!isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
  useEffect(() => {
    async function fetchSong() {
      const musicId = "1394943410"; // ID da música desejada

      const response = await axios.get(`https://itunes.apple.com/lookup?id=${musicId}&entity=song`);
      if (response.data.results.length > 0) {
        setPreviewUrl(response.data.results[0].previewUrl);
      }
    }
    fetchSong();
  }, []);

  useEffect(() => {
    if (previewUrl) {
      setSound(new Howl({
        src: [previewUrl],
        format: ['m4a']
      }));
    }
  }, [previewUrl]);

  const handlePlay = () => {
    if (sound !== null) {
      sound.play();
    }
  };

  return (
    <>
     <div className={`App ${isDarkMode ? 'dark' : ''}`}>
      <button onClick={toggleDarkMode}>Ta escuro, toque 2x para ficar dia!</button>
    </div>
      <div className='cs'>Dia</div>

      <div className="cs">
      <NavLink to="/galeria">
        <AiOutlineRollback />
      </NavLink>
      </div>
      <br></br>
      <div className="cs">
      <button onClick={handlePlay}><FaPlay /></button>
      </div>
      
      <p text>xablau</p>
    </>
  );
}

export default Dia;

