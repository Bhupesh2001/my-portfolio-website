import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import { TbCertificate } from "react-icons/tb";
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Interships</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>

            <article className="about__card">
              <TbCertificate className="about__icon" />
              <h5>Certificates</h5>
              <small>Adobe Cisco Wipro ... </small>
            </article>
          </div>

          <p>
            I am a CSE fresher with experience in Web App and Mobile App
            development. I have a strong passion for learning and constantly
            strive to expand my knowledge and skill set. I am open to exploring
            new technologies and eager to take on challenging projects that help
            me grow as a developer.
          </p>
          <p id="quotes">~ "Opportunities are valueable only if it's grabbed"</p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About