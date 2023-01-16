import React, { useState } from 'react';
import img1 from '../images/Group9.png';
import img2 from '../images/Group22.png';
import img3 from '../images/Group20.png';
import img4 from '../images/Group25.png';
import img5 from '../images/kitchen.png';
import img6 from '../images/bedroom.png';
import img7 from '../images/bathroom.png';
import img8 from '../images/other.png';

const Comp4 = () => {
    const cabin = [
        {
            'id': '1',
            'image1': img1,
            'image2': img5
        },
        {
            'id': '2',
            'image1': img2,
            'image2': img6
        },
        {
            'id': '3',
            'image1': img3,
            'image2': img7
        },
        {
            'id': '4',
            'image1': img4,
            'image2': img8
        }

    ]
    const [isHovering, setIsHovering] = useState(-1);
    

  return (
      <div className='comp4'>
          <div className='all-center'>
            <h2>OUR SERVICES</h2>
              <div className='comp-serv grid-4'>
                  {cabin.map((item) => {
                      return (
                          <div
                              className='card'
                              key={item.id}
                              onMouseEnter={() => setIsHovering(item.id)}
                              onMouseLeave={() => setIsHovering(-1)}
                          >
                              <img
                                  src={item.image2}
                                  alt=''
                                  className={isHovering === item.id ? '' : 'hidden'}
                                  style={{ width: '122%', position: 'relative' }}
                              />
                              <img
                                  src={item.image1}
                                  alt=''
                                  className={isHovering === item.id ? 'hidden' : ''}
                                  style={{ width: '120%', position: 'relative' }}
                              />
                        </div>
                      )
                  })}
              </div>
          </div>
      </div>
  )
}

export default Comp4;