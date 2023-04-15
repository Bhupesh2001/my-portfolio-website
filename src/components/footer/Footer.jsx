import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import { SiLeetcode } from "react-icons/si";


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        My Portfolio
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/bhupesh-pattanaik-719173111/"  target="_blank" rel="noopener noreferrer">
          <BsLinkedin />
        </a>
        <a href="https://www.instagram.com/bhupesh_pattanaik/?next=%2F"  target="_blank" rel="noopener noreferrer">
          <FiInstagram />
        </a>
        <a href="https://leetcode.com/bpattaniak/"  target="_blank" rel="noopener noreferrer">
          <SiLeetcode />
        </a>
      </div>
      <div className="footer__copyright">
        <small>
          &copy;Bhupesh Pattanaik. 
        </small>
      </div>
    </footer>
  );
}

export default Footer