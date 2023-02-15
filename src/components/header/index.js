import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '..';

import style from '@/styles/Header.module.scss';

import HeaderLogoSvg from '@/assets/modda-donna-logo.svg';
import HeaderLogoPng from '@/assets/modda-donna-logo.png';
import HeaderBg from '@/assets/header__bg.png';
import headerStyle1 from '@/assets/header__style-1.png'
import headerStyle2 from '@/assets/header__style-2.png'
import headerStyle3 from '@/assets/header__style-3.png'
import headerDecor from '@/assets/header__bg-decor.svg'

const HeaderNavigate = [
  {
    id: 1,
    name: 'About course',
    link: '#',
  },
  {
    id: 2,
    name: 'WHY US',
    link: '#',
  },
  {
    id: 3,
    name: 'COURSE DETAILS',
    link: '#',
  },
  {
    id: 4,
    name: 'FEEDBACKS',
    link: '#',
  },
];

export const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.header__top}>
        <div className="container">
          <div className={style.header__content}>
            <div className={style.logo}>
              <Image src={HeaderLogoSvg} alt="logo" />
              <Image src={HeaderLogoPng} alt="logo" />
            </div>
            <div className={style.navigate}>
              <ul>
                {HeaderNavigate.map((item) => (
                  <li key={item.id}>
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <Button className={style.button}>
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
      <div className="container">
        <div className={style.wrapper}>
          <div className={style.content}>
            <div className={style.title}>
              <h1>TOP3 techniques</h1>
              <p>in permanent makeup</p>
              <p>for Beginners</p>
            </div>
            <div className={style.style}>
              <div className={style.style__item}>
                <Image src={headerStyle1} alt='style' />
                <p>Soft eyelıner</p>
              </div>
              <div className={style.style__item}>
                <Image src={headerStyle2} alt='style' />
                <p>Powder Brows</p>
              </div>
              <div className={style.style__item}>
                <Image src={headerStyle3} alt='style' />
                <p>VELOUR LIPS</p>
              </div>
            </div>
            <form className={style.form}>
              <p className={style.form__name}>Contact us</p>
              <div className={style.form__content}>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Phone number" />
                <Button className={style.form__button}>SEND</Button>
              </div>
            </form>
          </div>
          <Image className={style.header__image} src={HeaderBg} alt="bg" />
        </div>
      </div>
      <Image className={style.header__decor} src={headerDecor} alt="bg" />
    </div>
  );
};
