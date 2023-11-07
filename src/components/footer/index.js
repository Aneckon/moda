import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from '..';

import style from '@/styles/Footer.module.scss';

import HeaderLogoPng from '@/assets/modda-donna-logo.png';

const host = process.env.host

export const Footer = ({ footer }) => {
  const handleClickScroll = () => {
    const element = document.getElementById('header');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={style.footer}>
      <div className="container">
        <div className={style.footer__content}>
          <div className={style.footer__left}>
            <div className={style.footer__social}>
              {footer?.socials.map(social => (
              <Link key={social?.id} target='_blank' href={social?.link}>
                <img src={`${host}${social?.icon?.data?.attributes?.url}`} alt={social?.icon?.data?.attributes?.alternativeText}  />
              </Link>
              ))}
            </div>
            <div className={style.footer__logo}>
              <img src={`${host}${footer?.logo?.data?.attributes?.url}`} alt={footer?.logo?.data?.attributes?.alternativeText} />
              <Image src={HeaderLogoPng} alt="logo" />
            </div>
          </div>
          <div className={style.footer__button}>
            <Button click={handleClickScroll} className={style.button}>
              {footer?.button?.title}
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
    </div>
  );
};
