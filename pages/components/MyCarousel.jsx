// components/MyCarousel.js

import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../styles/MyCarousel.css'

function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className='body-2-Card1'>
            <div className='Card1-img'>
                <img src="https://i.imgur.com/ihV5qmB.jpeg" className="d-block w-100" alt="food3" />
            </div>
            <div className='Card1-Subject'>
                <span>Discovering New Flavours</span>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='body-2-Card2'>
            <div className='Card2-img'>
                <img src="https://i.imgur.com/ioykBKq.jpeg" className="d-block w-100" alt="city1" />
            </div>
            <div className='Card2-Subject'>
                <span>Discovering New Places</span>
            </div>
        </div>
      </Carousel.Item>
    </Carousel>

    // <div className='body-2-Slider'>
    //     <div className='body-2-Card1'>
    //         <div className='Card1-img'>
    //             <img src="https://i.imgur.com/ihV5qmB.jpeg" className="d-block w-100" alt="food3" />
    //         </div>
    //         <div className='Card1-Subject'>
    //           <span>Discovering New Flavours</span>
    //         </div>
    //     </div>

    //     <div className='body-2-Card2'>
    //         <div className='Card2-img'>
    //             <img src="https://i.imgur.com/ioykBKq.jpeg" className="d-block w-100" alt="city1" />
    //         </div>
    //         <div className='Card2-Subject'>
    //           <span>Discovering New Places</span>
    //         </div>
    //     </div>
    // </div>
  );
}

export default MyCarousel;
