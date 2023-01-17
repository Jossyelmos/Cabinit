import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import qoute from '../images/qoute.png';

const Comp2 = () => {
  return (
    <div className='comp2'>
          <img src={qoute} alt='' />
          <div className='comp2-container'>
              <Carousel showStatus={false} showThumbs={false}>
                <div className='comp2-div text-left'>
                    <p className="">
                        Testing 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis lectu adipiscing adipiscingqaswds.
                    </p>
                    <h4>-  Name and Surname</h4>
                </div>
                <div className='comp2-div text-left'>
                    <p className="">
                        Testing 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis lectu adipiscing adipiscingqaswds.
                    </p>
                    <h4>-  Name and Surname</h4>
                </div>
                <div className='comp2-div text-left'>
                    <p className="">
                        Testing 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis lectu adipiscing adipiscingqaswds.
                    </p>
                    <h4>-  Name and Surname</h4>
                </div>
                <div className='comp2-div text-left'>
                    <p className="">
                        Testing 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis lectu adipiscing adipiscingqaswds.
                    </p>
                    <h4>-  Name and Surname</h4>
                </div>
            </Carousel>

          </div>
    </div>
  )
}

export default Comp2;