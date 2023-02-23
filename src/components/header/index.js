import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';

import { Button } from '..';

import style from '@/styles/Header.module.scss';
import 'react-toastify/dist/ReactToastify.css';

import HeaderLogoSvg from '@/assets/modda-donna-logo.svg';
import HeaderLogoPng from '@/assets/modda-donna-logo.png';
import HeaderBg from '@/assets/header__bg.png';
import headerStyle1 from '@/assets/header__style-1.png';
import headerStyle2 from '@/assets/header__style-2.png';
import headerStyle3 from '@/assets/header__style-3.png';
import headerDecor from '@/assets/header__bg-decor.svg';
import headerDecorMobile from '@/assets/header-decor-mobile.svg';
import headerTitle from '@/assets/title.svg';
import headerSubtitle from '@/assets/subtitle.svg';

const HeaderNavigate = [
  {
    id: 1,
    name: 'About course',
    link: 'aboute',
  },
  {
    id: 2,
    name: 'WHY US',
    link: 'whyus',
  },
  {
    id: 3,
    name: 'COURSE DETAILS',
    link: 'course',
  },
  {
    id: 4,
    name: 'FEEDBACKS',
    link: 'feedbacs',
  },
];

export const Header = () => {
  const form = React.useRef();
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);
  const [phoneError, setPhoneError] = React.useState(false);

  const handleClickScroll = () => {
    const element = document.getElementById('header');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollId = (link) => {
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (phone.length && email.length && phone.indexOf(' ') && email.indexOf(' ')) {
      emailjs
        .sendForm('service_w5q6pcs', 'template_33672ca', form.current, 'lZ6yuyMdIphWYyCqE')
        .then(
          (result) => {
            setEmail('');
            setPhone('');
            toast.success('Email sent successfully', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'dark',
            });
            setPhoneError(false);
            setEmailError(false);
          },
          (error) => {
            toast.error('Email sent no successfully', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'dark',
            });
          },
        );
    }
    if (phone.length === 0) {
      setPhoneError(true);
    }
    if (email.length === 0) {
      setEmailError(true);
    }
  };

  return (
    <div id="header" className={style.header}>
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
                    <p onClick={() => handleScrollId(item.link)}>{item.name}</p>
                  </li>
                ))}
              </ul>
            </div>
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
      <div className="container">
        <div className={style.wrapper}>
          <div className={style.content}>
            <div className={style.title}>
              <Image src={headerTitle} alt="title" />
              <Image className={style.subtitle} src={headerSubtitle} alt="subtitle" />
              <p>for Beginners</p>
            </div>
            <div className={style.style}>
              <div className={style.style__item}>
                <Image src={headerStyle1} alt="style" />
                <p>Soft eyelıner</p>
              </div>
              <div className={style.style__item}>
                <Image src={headerStyle3} alt="style" />
                <p>Powder Brows</p>
              </div>
              <div className={style.style__item}>
                <Image src={headerStyle2} alt="style" />
                <p>VELOUR LIPS</p>
              </div>
            </div>
            <form ref={form} onSubmit={sendEmail} className={style.form}>
              <p className={style.form__name}>Contact us</p>
              <div className={style.form__content}>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="name"
                  placeholder="Name"
                  name="name"
                  className={emailError ? style.input__error : ''}
                />
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  placeholder="Phone number"
                  name="phone"
                  pattern="[0-9]{12}"
                  maxLength="12"
                  className={phoneError ? style.input__error : ''}
                />
                <Button className={style.form__button}>SEND</Button>
              </div>
            </form>
          </div>
          <Image className={style.header__image} src={HeaderBg} alt="bg" />
        </div>
      </div>
      <Image className={style.header__decor} src={headerDecor} alt="bg" />
      <Image className={style.header__decorMobile} src={headerDecorMobile} alt="bg" />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
