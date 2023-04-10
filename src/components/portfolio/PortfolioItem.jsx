import React from 'react'

function PortfolioItem(props) {
    return (
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={props.image} />
            </div>
            <h3>{props.title}</h3>
            <div className="portfolio__item-cta">
                <a href={props.github} className='btn' target='_blank'>Github</a>
                <a href={props.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
    )
}

export default PortfolioItem