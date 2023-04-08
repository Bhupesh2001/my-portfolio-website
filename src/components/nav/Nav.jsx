import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  function handleClick(event) {
    const target = event.currentTarget.id;
    setActiveNav(target)
  }
  return (
    <nav>
      <a id='#' href="#" onClick={handleClick} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a id='#about' href="#about" onClick={handleClick} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a id='#experience' href="#experience" onClick={handleClick} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a id='#services' href="#services" onClick={handleClick} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a id='#contact' href="#contact" onClick={handleClick} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav