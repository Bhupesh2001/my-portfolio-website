import React from 'react'

function TestimonialCard(props) {
    
    return (
        <article className="testimonial">
            <div className="client__avatar">
                <img src={props.avatar} alt="Avatar One" />
            </div>
            <h5 className='client__name'>{props.name}</h5>
            <small className='client__review'>{props.review}</small>
        </article>
    )
}

export default TestimonialCard