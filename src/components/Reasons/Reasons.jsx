import React from 'react'
import './Reasons.css'
import reasonImg1 from '../../assets/reasons1.png';
import reasonImg2 from '../../assets/reasons2.png';
import { reasonsData } from '../../data/reasonsdata';


const Reasons = () => {
  return (
    <div className="reasons">
      <img src={reasonImg1} className='reason1' alt="" />
      
       <p>So many reasons to list with theTravelHunters,</p>
       <span>Here's a few:</span>

       <div className='reason'>
        {reasonsData.map((reason, index) =>{
          return(
             <div key={index} className='reasonCard'>
                <h2>{reason.heading}</h2>
                <p>{reason.description}</p>
            </div>
          )
        })}
        <img src={reasonImg2} className='reason2' alt="" />

       </div>
    </div>
  )
}

export default Reasons