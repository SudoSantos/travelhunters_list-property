import React, { useState } from 'react'
import './Testimonials.css';
import { testimonialsData } from '../../data/testimonialsdata';
import { FaCircleLeft } from "react-icons/fa6";
import { FaCircleRight } from "react-icons/fa6";


const Testimonials = () => {

  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  return (
    <div className='testimonials'>
        <p>Testimonials</p>
        <span>Here’s what our users have to say about us:</span>

        <div className="testimonies">
            <FaCircleLeft 
            onClick={()=>{
              selected===0?setSelected(tLength -1):
              setSelected((prev)=> prev - 1)
            }}
            className='arr-back'/>
            <img src={testimonialsData[selected].image} alt="" />
            
            <div className='testimony'>
              <p className='name'>{testimonialsData[selected].name}</p>
              <p className='hotel-name'>{testimonialsData[selected].hotel}</p>
              <p className='review'>{testimonialsData[selected].review}</p>
              
            </div>
            <FaCircleRight
            onClick={()=>{
              selected===tLength - 1?setSelected(0):
              setSelected((prev)=> prev + 1)
            }}
            className='arr-front'/>
        </div>
    </div>
  )
}

export default Testimonials