import React from 'react';
import logo from '../images/group14.png';
import facebook from '../images/facebook.png';
import youtube from '../images/youtube.png';
import frame from '../images/Frame.png';
import twitter from '../images/twitter.png';
import pintrest from '../images/pintrest.png';
import image from '../images/group12.png';

const Comp6 = () => {
  return (
    <div className='comp6-container bg-dark'>
        <div className='comp6-content all-center'>
            <h2>NEED NEW CABINETS? <span>LET'S CHAT.</span></h2>
            <p>Contact us today to find out more about what we can do for you. We’ll be more than happy to answer any of your questions.</p>
            <a href="!#" className='btn btn-bright btn-sm'>GET IN TOUCH</a>
        </div>
        <hr className='linebreak'/>
        <div className='footer'>
            <div className='grid-3'>
                <div>
                    <img src={logo} alt='' style={{ width: '50%'}} />
                    <div className='social-media'>
                        <a href='facebook.html'><img src={facebook} alt='facebook' style={{ width: '20px'}}/></a>
                        <a href='youtube.html'><img src={youtube} alt='youtube' style={{ width: '20px'}}/></a>
                        <a href='frame.html'><img src={frame} alt='frame' style={{ width: '20px'}}/></a>
                        <a href='pintrest.html'><img src={pintrest} alt='pintrest' style={{ width: '20px'}}/></a>
                        <a href='twitter.html'><img src={twitter} alt='' style={{ width: '20px'}}/></a>
                    </div>
                </div>
                <div className='last-links'>
                    <div className='grid-3'>
                        <div className='q-links'>
                            <h6>Quick Links</h6>
                            <p><a href='!#'>What we do</a></p>
                            <p><a href='!#'>Why Cabinets</a></p>
                            <p><a href='!#'>About Us</a></p>
                        </div>
                        <div className='c-links'>
                              <h6>Contact</h6>
                              <p>0860222463</p>
                              <p>clouw@thecabinetco.co.za</p>
                        </div>
                        <div className='p-links'>
                            <h6>Postal Address:</h6>
                            <p>Posbus 880</p>
                            <p>Jeffreys Bay, 6330</p>
                        </div>
                    </div>
                </div>
                <div className='text-right'>
                      <img src={image} alt='' style={{ width: '40%', position: 'relative', right: '40px'}} />
                </div>
            </div>
            <p className='text-center sign'>©TheCabinetComapny | Designed by <a href='http://www.impactstudio.co.za/'>Impact Studio </a></p>
        </div>
    </div>
  )
}

export default Comp6;