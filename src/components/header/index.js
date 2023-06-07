import React from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import InputMask from 'react-input-mask';

import { useSearchParams } from 'next/navigation';

import { ToastContainer, toast } from 'react-toastify';

import { Button } from '..';

import style from '@/styles/Header.module.scss';
import 'react-toastify/dist/ReactToastify.css';

import HeaderLogoPng from '@/assets/modda-donna-logo.png';
import HeaderBg from '@/assets/header__bg.png';
import headerStyle1 from '@/assets/header__style-1.png';
import headerStyle2 from '@/assets/header__style-2.png';
import headerStyle3 from '@/assets/header__style-3.png';
import headerDecor from '@/assets/header__bg-decor.svg';
import headerDecorMobile from '@/assets/header-decor-mobile.svg';
import headerTitle from '@/assets/title.svg';
import headerSubtitle from '@/assets/subtitle.svg';

const host = process.env.host

export const Header = ({ header, headContent }) => {
  const form = React.useRef();
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [nameError, setNameError] = React.useState(false);
  const [phoneError, setPhoneError] = React.useState(false);

  const [sendLabes, setSendLabes] = React.useState([]);

  const searchParams = useSearchParams();

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

  const sendEmail = async (e) => {
    e.preventDefault();

    if (phone.length && name.length && phone.indexOf(' ') && name.indexOf(' ')) {
      emailjs
        .sendForm('service_w5q6pcs', 'template_33672ca', form.current, 'lZ6yuyMdIphWYyCqE')
        .then(
          (result) => {
            setName('');
            setPhone('');
            toast.success('Email sent successfully', {
              toastId: 'form_submit_Top3',
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
            setNameError(false);
          },
          (error) => {
            toast.error('Email sent no successfully', {
              toastId: 'form_submit_Top3_error',
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
      const rawResponse = await fetch(
        'https://pmu.modadonnabeauty.com/api/create_pipedrive_lead/',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            phone: phone,
            labels: sendLabes,
            utm_source: searchParams.get('utm_source')?.length ? searchParams.get('utm_source') : '',
            utm_medium: searchParams.get('utm_medium')?.length ? searchParams.get('utm_medium') : '',
            utm_campaign: searchParams.get('utm_campaign')?.length ? searchParams.get('utm_campaign') : '',
            utm_content: searchParams.get('utm_content')?.length ? searchParams.get('utm_content') : '',
            utm_term: searchParams.get('utm_term')?.length ? searchParams.get('utm_term') : '',
          }),
        },
      );
      const data = await rawResponse.json();
      console.log(data);
    }
    if (phone.length === 0) {
      setPhoneError(true);
    }
    if (name.length === 0) {
      setNameError(true);
    }
  };

  React.useEffect(() => {
    if (searchParams.get('fbclid')?.length) {
      return setSendLabes(['landing PMU 3 TOP', 'Facebook']);
    }
    if (searchParams.get('gclid')?.length) {
      return setSendLabes(['landing PMU 3 TOP', 'Google']);
    }
    return setSendLabes(['landing PMU 3 TOP']);
  }, [searchParams]);

  return (
    <div id="header" className={style.header}>
      <div className={style.header__top}>
        <div className="container">
          <div className={style.header__content}>
            <div className={style.logo}>
              <img src={`${host}${header?.logo?.data?.attributes?.url}`} alt="Modadonna Logo" />
              <Image src={HeaderLogoPng} alt="logo" />
            </div>
            <div className={style.navigate}>
              <ul>
                {header?.items.map((item) => (
                  <li key={item.id}>
                    <p onClick={() => handleScrollId(item.link)}>{item.title}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Button click={handleClickScroll} className={style.button}>
              {header?.button.title}
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
              <img src={`${host}${headContent?.title?.data?.attributes?.url}`} alt="title" />
              <img className={style.subtitle} src={`${host}${headContent?.subtitle?.data?.attributes?.url}`} alt="subtitle" />
              <p>{headContent?.description}</p>
            </div>
            <div className={style.style}>
              {headContent?.description_images.map(item => (
                <div className={style.style__item}>
                  <img src={`${host}${item?.icon?.data?.attributes?.url}`} alt={item?.icon?.data?.attributes?.alternativeText} />
                  <p>{item?.title}</p>
                </div>
              ))}
            </div>
            <form ref={form} onSubmit={sendEmail} className={style.form}>
              <p className={style.form__name}>{headContent?.contact_us?.title}</p>
              <div className={style.form__content}>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="name"
                  placeholder={headContent?.contact_us?.placeholder_1}
                  name="name"
                  className={nameError ? style.input__error : ''}
                />
                <InputMask
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  placeholder={headContent?.contact_us?.placeholder_2}
                  name="phone"
                  mask="+49 9999 999999"
                  className={phoneError ? style.input__error : ''}
                />
                <Button className={style.form__button}>{headContent?.contact_us?.button}</Button>
              </div>
            </form>
          </div>
          <img
            className={style.header__image}
            src={`${host}${headContent?.image?.data?.attributes?.url}`}
            alt={headContent?.image?.data?.attributes?.alternativeText}
          />
        </div>
      </div>
      <Image className={style.header__decor} src={headerDecor} alt="bg" />
      <Image className={style.header__decorMobile} src={headerDecorMobile} alt="bg" />
      <ToastContainer
        toastId="form_submit_Top3"
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
