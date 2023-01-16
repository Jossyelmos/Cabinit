import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from '../images/rectangle19.png';
import image2 from '../images/kitchen-naude.png';
import image3 from '../images/rectangle20.png';
import image4 from '../images/rectangle17.png';
import image5 from '../images/rectangle14.png';
import image6 from '../images/black-brick.png';
import image7 from '../images/rectangle15.png';

const Comp1 = () => {
  return (
    <div className='comp1 all-center my-3'>
          <h1 className='all-center text-bright large'>TRUSTED LEADER IN <span className='text-warning'>CABINET DESIGN.</span></h1>
          
          <div className='carousel mag'>
              <Carousel
                  autoFocus={false}
                  width={'85%'}
                  showThumbs={false}
                  showArrows={false}
                  showIndicators={false}
                  showStatus={false}
              >
                    <div>
                        <img src={image1} alt='img'/>
                    </div>
                </Carousel>
              <Carousel
                  className='carousel'
                  autoFocus={false}
                  width={'97%'}
                  showThumbs={false}
                  showArrows={false}
                  showIndicators={false}
                  showStatus={false}
              >
                        <div>
                            <img src={image2} alt='img'/>
                        </div>
                </Carousel>
              <Carousel
                  className='carousel'
                  autoFocus={false}
                  width={'95%'}
                  showThumbs={false}
                  showArrows={false}
                  showIndicators={false}
                  showStatus={false}
              >
                        <div>
                            <img src={image3} alt='img'/>
                        </div>
                </Carousel>
              <Carousel
                  className='carousel'
                  autoFocus={false}
                  width={'95%'}
                  showThumbs={false}
                  showArrows={false}
                  showIndicators={false}
                  showStatus={false}
              >
                        <div>
                            <img src={image6} alt='img'/>
                        </div>
                </Carousel>
              <Carousel
                  className='carousel'
                  autoFocus={false}
                  width={'95%'}
                  showThumbs={false}
                  showArrows={false}
                  showIndicators={false}
                  showStatus={false}
              >
                        <div>
                            <img src={image5} alt='img'/>
                        </div>
                </Carousel>
              <Carousel
                //   className='carousel'
                  autoFocus={false}
                  width={'95%'}
                  showThumbs={false}
                  showArrows={false}
                  showIndicators={false}
                  showStatus={false}
              >
                        <div>
                            <img src={image6} alt='img'/>
                        </div>
                </Carousel>
          </div>
          <div className='carousel-container'>
              <Carousel
                //   className='carousel'
                  autoFocus={false}
                  width={'80%'}
                  showThumbs={false}
                  showArrows={false}
                  showIndicators={false}
                  showStatus={false}
              >
                    <div>
                        <img src={image7} alt='img'/>
                    </div>
              </Carousel>
              <div className='mid-carousel'>
                <Carousel
                    //   className='carousel'
                    autoFocus={false}
                    width={'100%'}
                    showThumbs={false}
                    showArrows={false}
                    showIndicators={false}
                    showStatus={false}
                >
                            <div>
                        <img src={image1} alt='img'/>
                            </div>
                    </Carousel>
                <Carousel
                    //   className='carousel'
                    autoFocus={false}
                    width={'100%'}
                    showThumbs={false}
                    showArrows={false}
                    showIndicators={false}
                    showStatus={false}
                >
                            <div>
                                <img src={image4} alt='img'/>
                            </div>
                    </Carousel>
                <Carousel
                    //   className='carousel'
                    autoFocus={false}
                    width={'100%'}
                    showThumbs={false}
                    showArrows={false}
                    showIndicators={false}
                    showStatus={false}
                    
                >
                            <div>
                                <img src={image3} alt='img'/>
                            </div>
                    </Carousel>
              </div>
              <Carousel
                //   className='carousel'
                  autoFocus={false}
                  width={'85%'}
                  showThumbs={false}
                  showArrows={false}
                  showIndicators={false}
                  showStatus={false}
                  
              >
                        <div>
                            <img src={image5} alt='img' style={{ position: 'relative', left: '-35px'}}/>
                        </div>
                </Carousel>
          </div>
    </div>
  )
}

export default Comp1;