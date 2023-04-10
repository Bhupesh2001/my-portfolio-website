import React from 'react'
import { BiCheck } from 'react-icons/bi'

function ServiceItem(props) {
    return (
        <li>
            <BiCheck className="service__list-icon" />
            <p>{props.name}</p>
        </li>
    )
}

export default ServiceItem