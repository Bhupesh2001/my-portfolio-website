import React from 'react'
import './experience.css'
import Skill from './Details'
import { frontendSkills, backendSkills } from './skills'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div>
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {
              frontendSkills.map((skill,index) => {
                return <Skill key={index} name={skill.name} level={skill.level} />
              })
            }
          </div>
        </div>
        <div>
          <h3>Backend Development</h3>
          <div className="experience__content">
            {
              backendSkills.map((skill,index) => {
                return <Skill key={index} name={skill.name} level={skill.level} />
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience