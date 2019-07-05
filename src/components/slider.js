import React from 'reactn';
import Swiper from 'react-id-swiper';
import { Autoplay, Pagination } from 'swiper/dist/js/swiper.esm'

const SimpleSwiperWithParams = props => {
  const { data } = props
  console.log(data)
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
    let div = []
    list.forEach(i => {
      div.push(<div><img alt={i.name} className="swiper-img" src={i.image_src} key={i.promo_id}></img></div>)
    })
    return div
  }

  return (
    <Swiper {...params}>
      {createSlide(data)}
      {/* <img src={data[0].image_src} alt=""/> */}
    </Swiper>
  )
}

export default SimpleSwiperWithParams;