import React, { useContext } from 'react';
import loginContext from '../context/LoginContext';

// function toggleTheme() {
//     setThemeColor(themeColor === 'dark' ? 'light' : 'dark');
//   }

function Footer() {
  const { themeColor } = useContext(loginContext);
  return <footer>Tema Atual: {themeColor.color}</footer>;
}

export default Footer;