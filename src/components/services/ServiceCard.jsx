import React from 'react'
import ServiceItem from './ServiceItem'


function ServiceCard(props) {
    return (
        <article className="service">
            <div className="service__head">
                <h3>{props.card_title}</h3>
            </div>
            <ul className="service__list">
                {
                    props.list.map((val, index) => {
                        return <ServiceItem key={index} name={val} />
                    })
                }
            </ul>
        </article>
    )
}

export default ServiceCard