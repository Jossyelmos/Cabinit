import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from '../images/rectangle19.png';
import image2 from '../images/kitchen-naude.png';
import image3 from '../images/rectangle20.png';
import image4 from '../images/rectangle17.png';
import image5 from '../images/rectangle19.png';
import image6 from '../images/black-brick.png';
import image7 from '../images/rectangle15.png';

const Comp1 = () => {
  return (
    <div className='comp1 all-center my-3'>
          <h1 className='all-center text-bright large'>TRUSTED LEADER IN <span className='text-warning'>CABINET DESIGN.</span></h1>
          
          <div className='carousel mag'>
              <div>
                    <div>
                        <img src={image1} alt='img'/>
                    </div>
                </div>
              <div>
                    <div>
                        <img src={image2} alt='img'/>
                    </div>
                </div>
              <div>
                    <div>
                        <img src={image3} alt='img'/>
                    </div>
                </div>
              <div>
                    <div>
                        <img src={image6} alt='img'/>
                    </div>
                </div>
              <div>
                    <div>
                        <img src={image5} alt='img'/>
                    </div>
                </div>
              <div>
                    <div>
                        <img src={image6} alt='img'/>
                    </div>
                </div>
          </div>
          <div className='carousel-container'>
              <div>
                    <div>
                        <img src={image7} alt='img'/>
                    </div>
              </div>
                <div className='mid-carousel'>
                    <div>
                        <div>
                            <img src={image1} alt='img'/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={image4} alt='img'/>
                        </div>
                    </div>
                    <div className='remove'>
                        <div>
                            <img src={image3} alt='img'/>
                        </div>
                    </div>
                    </div>
              <div>
                <div>
                    <img src={image5} alt='img'/>
                </div>
              </div>
            
        </div>
    </div>
  )
}

export default Comp1;