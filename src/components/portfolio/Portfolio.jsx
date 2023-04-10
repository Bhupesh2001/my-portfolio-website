import React from 'react'
import './portfolio.css'
import data from './data'
import PortfolioItem from './PortfolioItem'

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({image,title,github,demo},index)=>{
            return <PortfolioItem key={index} image={image} title={title} github={github} demo={demo}/>
          })
        }

      </div>
    </section>
  )
}

export default Portfolio