import React, { useState } from 'react';
import './Section.css';
import sectionPng from '../../assets/sectionImg.png';

const Section = () => {
  const [modal, setModal] = useState(false);
  const [forgotModal, setForgotModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    if (!modal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  };

  const toggleForgotModal = () => {
    setForgotModal(!forgotModal);
    if (!forgotModal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  };

  return (
    <div className="section">
      <div>
        <p className='list'>List your property with <br />thetravelhunters</p>
      </div>

      <div className='automate'>
        <div>
          <div><p>Automate everything <br /> and earn more</p></div>
          <div>
            <span>Already a partner?</span>
            <span><button onClick={toggleModal}>Manage your property</button></span>
          </div>
        </div>

        <div>
          <div>
            <p>Managing your booking can be tedious, let's do that for you.</p>
            <p>Our Late-night product feature allows you to make the most
              out of your property, <br />keeping your rooms filled every night
              by offering guests discount prices.
            </p>
            <button>List my Property</button>
          </div>

          <img src={sectionPng} alt="" />
        </div>
      </div>

      {modal && (
        <div className="modal">
          <div className="modal-content-holder">
            <button className="close" onClick={toggleModal}>X</button>
            <div className="modal-content">

              <h1 style={{ fontWeight: 'bold' }}>Sign in to your Partner Account</h1>

              <div className='input'>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' placeholder='Bourbon@gmail.com' />
              </div>

              <div className='input'>
                <label htmlFor="passwd">Password</label>
                <input type="password" id='passwd' placeholder='Minimum of six characters' />
              </div>

              <button style={{ color: 'white', backgroundColor: '#1f7a1f', border: 'none', fontWeight: 'bold', padding: '10px 0', borderRadius: '7px', fontSize: '1rem', textTransform: 'capitalize', marginTop: '10px', cursor: 'pointer' }}>sign in</button>
              <span style={{ textAlign: 'left', fontSize: '0.8rem', fontWeight: 'bold', cursor:'pointer' }} onClick={toggleForgotModal}>Forgot Password?</span>
            </div>
          </div>
        </div>
      )}

      {forgotModal && (
        <div className="modal">
          <div className="modal-content-holder">
            <button className="close" onClick={toggleForgotModal}>X</button>
            <div className="modal-content">
              <h1 style={{ fontWeight: 'bold'}}>Forgot Password?</h1>
              <div className='input'>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' placeholder='Bourbon@gmail.com' />
              <p style={{margin:'10px 0', fontSize:'1rem', textAlign:'left'}}>Please enter your email in the box above. We will send you a link to access further instructions.</p>
              </div>
              <button style={{ color: 'white', backgroundColor: '#1f7a1f', border: 'none', fontWeight: 'bold', padding: '10px 0', borderRadius: '7px', fontSize: '1rem', textTransform: 'capitalize', marginTop: '10px', cursor: 'pointer'}}>Reset Password</button>
              <button onClick={toggleForgotModal} style={{ color: '#32383e', backgroundColor: '#ffffff', border: '1px solid teal', fontWeight: 'bold', padding: '10px 0', borderRadius: '7px', fontSize: '1rem', textTransform: 'capitalize', marginTop: '10px', cursor: 'pointer' }}>Back to Sign In</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Section;