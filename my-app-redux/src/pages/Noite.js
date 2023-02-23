import React from 'react'
import { AiOutlineRollback } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

export default function Noite() {
  return (
    <>
    <div>Noite</div>
    <NavLink
          to="/galeria"
          >
    <AiOutlineRollback />
            </NavLink>
    {/* <body class="night-page">

     <body className="noite" />
</body> */}
{/* <div class="night-page">
  <div class="moon"></div>
</div> */}
    </>
  )
}
