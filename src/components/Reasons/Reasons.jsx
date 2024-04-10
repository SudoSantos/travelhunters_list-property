import React from 'react'
import './Reasons.css'
import reasonImg1 from '../../assets/reasons1.png';
import reasonImg2 from '../../assets/reasons2.png';

const reasons = [
  {
    heading:'Quick Payout',
    description: 'You can access your earning just after every customer checks-out from your property, Ensuring you access your earnings swiftly is our priority.'
  },
  {
    heading:'Earn big at Night',
    description: 'Offer guests amazing discount and get your rooms filled every night.'
  },
  {
    heading:'A Wider reach',
    description: 'Tap into our vast audience of over 50,000 monthly visitors.'
  },
  {
    heading:'Info Guide',
    description: 'You can access your earning just after every customer checks-out from your property, Ensuring you access your earnings swiftly is our priority.'
  },
  {
    heading:'Customer Support',
    description: '24/7 support infrastructure to handle all problems and provide solutions on the go.'
  },
  {
    heading:'No Hidden fees',
    description: 'We only charge commission on confirmed bookings only. That is all.'
  }
]

const Reasons = () => {
  return (
    <div className="reasons">
      <img src={reasonImg1} className='reason1' alt="" />
      
       <p>So many reasons to list with theTravelHunters,</p>
       <span>Here's a few:</span>

       <div className='reason'>
        {reasons.map((reason, index) =>{
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