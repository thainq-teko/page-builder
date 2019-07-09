import React from 'reactn';
import Swiper from 'react-id-swiper';
import "react-id-swiper/lib/styles/scss/swiper.scss";
import "./SimpleSwiperWithParams.scss";
import { Autoplay, Pagination } from 'swiper/dist/js/swiper.esm'

const SimpleSwiperWithParams = props => {
  const { data } = props
  console.log(data);
  const params = {
    modules: [Autoplay, Pagination],
    autoplay: {
      delay: 2500
    },
    grabCursor: true,
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

  const createSlide = list => {
    return list.map(item =>
      <div key={item.promo_id}>
        <img src={item.image_src} alt={item.name} />
      </div>
    );
  };

  return (
    <>
      <div className="SimpleSwiperWithParams">
        <Swiper {...params}>
          {createSlide(data)}
        </Swiper>
      </div>
    </>
  )
}

export default SimpleSwiperWithParams;