import React from 'react';
import img1 from '../images/kitchen-naude.png';
import img2 from '../images/unsplash.png';

const Comp3 = () => {
  return (
      <div className='comp3-container'>
          <div className='comp3 all-center'>
              <div className='grid-2'>
                  <div className='card'>
                      <img src={img1} alt='' style={{ width: '250px' }} />
                      <div className='comp3-card bg-dark'>
                          <div className='card-content text-center'>
                            <h4>Custom home installations</h4> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis lectus.</p> 
                          </div>
                          <a href="/about" className='btn btn-bright btn-sm'>LEARN MORE</a>
                      </div>
                  </div>
                  <div className='card'>
                      <img src={img2} alt='' style={{ width: '250px', height: '157px' }} />
                      <div className='comp3-card bg-dark'>
                          <div className='card-content text-center'>
                            <h4>Developer <br/>projects</h4> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis lectus.</p> 
                          </div>
                          <a href="/about" className='btn btn-bright btn-sm'>LEARN MORE</a>
                      </div>
                  </div>
              </div>
              <hr className='comp3s' />
              <div className='card-content2'>
                  <p>
                      THE CABINET COMPANY CAN BUILD YOU THE CABINET OF YOUR DREAMS. 
<span> YOU DREAM IT, WE DESIGN IT.</span>.
                  </p>
              </div>
          </div>
      </div>
  )
}

export default Comp3;