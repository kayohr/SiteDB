import React from 'react'
import { AiOutlineRollback } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

export default function Dia() {
  return (
    <>
    <div>Dia</div>
    <NavLink
          to="/galeria"
          >
    <AiOutlineRollback />
            </NavLink>

    </>
  )
}
