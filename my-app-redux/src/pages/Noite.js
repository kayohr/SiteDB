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

    </>
  )
}
