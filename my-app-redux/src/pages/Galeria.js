import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import LoginContext from '../context/LoginContext';
import { MdNightsStay } from 'react-icons/md';
import { FaSun } from 'react-icons/fa';



export default function Galeria() {
    const { xablau } = useContext(LoginContext);

    const { toggleTheme } = useContext(LoginContext);

  return (
      <>
      <div>Galeria</div>
      <div class="coracao"></div>

    <button
    onClick={() => { toggleTheme(); }}
    type="button"
  >
    {xablau === 'dark' ? '🌞' : '🌒'}
  </button>
  <footer>
    <NavLink 
    to="/noite" 
    activeClassName="active">
 <MdNightsStay />    
 </NavLink>

    <NavLink 
    to="/dia" 
    activeClassName="active">
    <FaSun />

    </NavLink>
      </footer>
      
  </>
  )
}
