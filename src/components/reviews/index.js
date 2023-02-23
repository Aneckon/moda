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

const SwiperList = [
  {
    id: 1,
    name: 'Bianca Jae',
    subName: '8 months ago',
    description: `I have now done 2 training courses with Olga over the past 2 years and even booked in for my own treatment. I found Olga and booked with her firstly because I absolutely loved her work it’s stunning, then when you meet her in person she is just a beautiful person, so kind and knowledgeable and she absolutely knows her stuff. She shares all her years of knowledge, tips and tricks and gives you the confidence to work by yourself. She’s always given me support after my courses and answered any questions I’ve had even months after!
    I now recommend her to anyone interested in a career in PMU.
    Thanks again Olga ❤️`,
  },
  {
    id: 2,
    name: 'Catalina Molocea',
    subName: 'a year ago',
    description: `I had my permanent make up course done with Olga Mankovskaia​​ and I couldn’t have a better trainer! I had no background in the industry and her teaching technique was amazing, such a patient and warm person, she helps you in everything and doesn’t let you leave until you fully understand everything. I complete the course and had clients straight after, she gave me the confidence and I am so pleased to have her on my journey even if the course ended. You can always go back to her for advices and feedback which these days this thing is rare. Highly recommend her and her team! They all so good! 👌🏼❤️`,
  },
  {
    id: 3,
    name: 'Kristina Ziltsova',
    subName: 'a month ago',
    description: `I recently completed my PMU course at Moda Donna .Olga You are amazing at what you do! Your passion and dedication is beyond words!
    The school offers great level of support and communication. Amazing at organizing models to get practice with real clients , which was crucial for me. All the training rooms SUPER cosy, clean ,tidy with the newest equipment to be trained with . JUST AMAZING!`,
  },
  {
    id: 4,
    name: 'Hrystyna Hrystyna',
    subName: '4 months ago',
    description: `I had finished a course "3 Top techniques" in permanent make up in Olga Mankovskaia school. I had very intensive 7 days of course with huge amount of knowledge and practic. Olga is a very good teacher and she knows how to provide important information for students. Also Big Thank You for girls: Olga, Tania,Lisa for support and attention.`,
  },
  {
    id: 5,
    name: 'Bianca Jae',
    subName: 'months ago',
    description: `I have now done 2 training courses with Olga over the past 2 years and even booked in for my own treatment. I found Olga and booked with her firstly because I absolutely loved her work it’s stunning, then when you meet her in person she is just a beautiful person, so kind and knowledgeable and she absolutely knows her stuff. She shares all her years of knowledge, tips and tricks and gives you the confidence to work by yourself. She’s always given me support after my courses and answered any questions I’ve had even months after!
    I now recommend her to anyone interested in a career in PMU.
    Thanks again Olga ❤️`,
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
    <div id="feedbacs" className={style.reviews}>
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
                      <div>
                        <p>{item.name}</p>
                        <p>{item.subName}</p>
                      </div>
                    </div>
                    <Image className={style.rate} src={rate} alt="rate" />
                  </div>
                  <p className={style.description}>{item.description}</p>
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
