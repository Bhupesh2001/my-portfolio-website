import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/bhupesh-pattanaik-719173111/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Bhupesh2001" target="_blank"><FaGithub/></a>
        <a href="https://leetcode.com/bpattaniak/" target="_blank"><SiLeetcode/></a>
    </div>
  )
}

export default HeaderSocials