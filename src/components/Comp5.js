import React from 'react';
import image from '../images/starred.png'

const Comp5 = () => {
  return (
      <div className='comp5-container'>
          <div className='grid-2'>
              <div className='comp5-content'>
                  <h2>WHERE IT <span>STARTED</span></h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra</p>
              </div>
              <div>
                  <img src={image} alt='' style={{ width: '90%' }} />
              </div>
          </div>
    </div>
  )
}

export default Comp5;