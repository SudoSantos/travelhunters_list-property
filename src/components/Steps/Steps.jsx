import React from 'react'
import './Steps.css';
import stepImg1 from '../../assets/steps1.png';
import stepImg2 from '../../assets/steps2.png';

const steps = [
  {
    heading:'Create and Personalise your own profile',
    desc: 'Input all necessary info like your name...'
  },
  {
    heading:'Fill in property details and prices',
    desc:'Input all necessary info regarding your property'
  },
  {
    heading:'You are now set to go live',
    desc:'And gain access to a network of users'
  },
  {
    heading: 'Property is live and viewed by travellers',
    desc:'A lot of users get to see and use your property'
  }
]


const Steps = () => {
  return (
    <div className="steps">
      <img src={stepImg1} className='step1' alt="" />
        <p>Follow these Easy steps</p>
        <span>to listing your property:</span>

        <div className='step-holder'>
          {steps.map((step, index) => {
            return(
              <div className='step'>
              <h2>{step.heading}</h2>
              <p>{step.desc}</p>
            </div>
            )
          })}
        </div>
        
        <img src={stepImg2} className='step2' alt="" />
    </div>
  )
}

export default Steps
