import React from 'react'
import './services.css'
import ServiceCard from './ServiceCard'
import {list1,list2,list3} from './serviceList'

function services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <ServiceCard card_title="Mobile App Development" list= {list1}/>
        <ServiceCard card_title="Web App Developement" list= {list2}/>
        <ServiceCard card_title="More" list= {list3}/>
      </div>
    </section>
  )
}

export default services