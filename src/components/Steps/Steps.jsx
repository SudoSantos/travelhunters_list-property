import React from 'react'
import './Steps.css';
import stepImg1 from '../../assets/steps1.png';
import stepImg2 from '../../assets/steps2.png';
import { stepsData } from '../../data/stepsdata'; 



const Steps = () => {
  return (
    <div className="steps">
      <img src={stepImg1} className='step1' alt="" />
        <p>Follow these Easy steps</p>
        <span>to listing your property:</span>

        <div className='step-holder'>
          {stepsData.map((step, index) => {
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
