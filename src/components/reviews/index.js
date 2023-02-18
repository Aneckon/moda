import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import { Button } from '..';

import style from '@/styles/Reviews.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import avatar from '@/assets/avatar.png';
import google from '@/assets/logo-google.svg';
import rate from '@/assets/rate.svg';

const SwiperList = [
  {
    id: 1,
    avatar: avatar,
    name: 'Ann Hathaway',
    subName: 'Beauty Space Owner',
    description: `“I have sent 4 masters from my team to level up their knowledge. They absolutely loved the detailed approach to teaching, friendly atmosphere. 
    Will definitely come more”`,
    icon: google,
    iconName: 'Read the review ',
  },
  {
    id: 2,
    avatar: avatar,
    name: 'Ann Hathaway',
    subName: 'Beauty Space Owner',
    description: `“I have sent 4 masters from my team to level up their knowledge. They absolutely loved the detailed approach to teaching, friendly atmosphere. 
    Will definitely come more”`,
    icon: google,
    iconName: 'Read the review ',
  },
  {
    id: 3,
    avatar: avatar,
    name: 'Ann Hathaway',
    subName: 'Beauty Space Owner',
    description: `“I have sent 4 masters from my team to level up their knowledge. They absolutely loved the detailed approach to teaching, friendly atmosphere. 
    Will definitely come more”`,
    icon: google,
    iconName: 'Read the review ',
  },
  {
    id: 4,
    avatar: avatar,
    name: 'Ann Hathaway',
    subName: 'Beauty Space Owner',
    description: `“I have sent 4 masters from my team to level up their knowledge. They absolutely loved the detailed approach to teaching, friendly atmosphere. 
    Will definitely come more”`,
    icon: google,
    iconName: 'Read the review ',
  },
  {
    id: 5,
    avatar: avatar,
    name: 'Ann Hathaway',
    subName: 'Beauty Space Owner',
    description: `“I have sent 4 masters from my team to level up their knowledge. They absolutely loved the detailed approach to teaching, friendly atmosphere. 
    Will definitely come more”`,
    icon: google,
    iconName: 'Read the review ',
  },
];

export const Reviews = () => {
  const handleClickScroll = () => {
    const element = document.getElementById('header');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={style.reviews}>
      <div className="container">
        <h2 className={style.title}>
          Happy students and what they had to say <br /> about us....
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
            {SwiperList.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={style.reviews__slide}>
                  <div className={style.slide__hed}>
                    <div className={style.content}>
                      <Image className={style.avatar} src={item.avatar} alt="avatar" />
                      <div>
                        <p>{item.name}</p>
                        <p>{item.subName}</p>
                      </div>
                    </div>
                    <Image className={style.rate} src={rate} alt="rate" />
                  </div>
                  <p className={style.description}>{item.description}</p>
                  <div className={style.google}>
                    <Image src={item.icon} alt="google" />
                    <span>{item.iconName}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Button click={handleClickScroll} className={style.button}>
            APPLY NOW
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
