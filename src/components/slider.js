import React from 'reactn';
import { useGlobal } from 'reactn'
import Swiper from 'react-id-swiper';

import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';

const data = useGlobal("arrayList")

const SimpleSwiperWithParams = (props) => {
  console.log(props)
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true,
    centeredSlides: true,
  }

  return (
    <Swiper {...params}>
      <div>
        <img src={slide1} alt="slide1" style={{textAlign: "center"}} />
      </div>
      <div>
        <img src={slide2} alt="slide1" />
      </div>
      <div>
        <img src={slide1} alt="slide1" />
      </div>
      <div>
        <img src={slide2} alt="slide1" />
      </div>
      <div>
        <img src={slide1} alt="slide1" />
      </div>
    </Swiper>
  )
}

export default SimpleSwiperWithParams;