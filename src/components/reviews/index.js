import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import { Button } from '..';

import style from '@/styles/Reviews.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import rate from '@/assets/rate.svg';

export const Reviews = ({ title, feedback_cards, button }) => {
  const handleClickScroll = () => {
    const element = document.getElementById('header');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="feedbacs" className={style.reviews}>
      <div className="container">
        <h2 className={style.title}>
          {title}
        </h2>
        <div className="reviews__swiper">
          <Swiper
            navigation={true}
            modules={[Navigation, Pagination]}
            slidesPerView="auto"
            centeredSlides={true}
            pagination={true}
            loop={true}
            className="mySwiper">
            {feedback_cards.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={style.reviews__slide}>
                  <div className={style.slide__hed}>
                    <div className={style.content}>
                      <div>
                        <p>{item.name}</p>
                        <p>{item.date}</p>
                      </div>
                    </div>
                    <Image className={style.rate} src={rate} alt="rate" />
                  </div>
                  <p className={style.description}>{item.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Button click={handleClickScroll} className={style.button}>
            {button.title}
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.2845 14.4375L14.6953 11L11.2845 7.5625M14.2214 11H7.30469"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 19.25C15.5547 19.25 19.25 15.5547 19.25 11C19.25 6.44531 15.5547 2.75 11 2.75C6.44531 2.75 2.75 6.44531 2.75 11C2.75 15.5547 6.44531 19.25 11 19.25Z"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};
