import React from 'react';
import './Footer.css';
import Nanta from '../../assets/nanta.png';
import Logo from '../../assets/travelhunterslogo.png';


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-l'>
            <img src={Logo} alt="" />
            <p>Office Address: 49, B9 Street, Citec Estate, Mbora District, F.C.T , Abuja</p>
            <p>theTravelHunters is registered under Grey-Vertigo Services Ltd</p>
            
            <div>
              <p>theTravelHunters is a travel and tourism company domiciled in Nigeria and a member of</p>
              <img src={Nanta} alt="" />
            </div>
            
        </div>

        <div className='footer-r'>
            <p>Having any issues <br /> listing your property?</p>

            <div>
                <span>Talk to our sales team</span>
                <span>+234-806-575-4260</span>
            </div>
        </div>
    </div>
  )
}

export default Footer