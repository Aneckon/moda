import React from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import InputMask from 'react-input-mask';
import Select from 'react-select'
import cx from 'classnames'
import countryPrefixes from '../consts/countryPrefixes'

import { useSearchParams } from 'next/navigation';

import { ToastContainer, toast } from 'react-toastify';

import { Button } from '..';

import style from '@/styles/Header.module.scss';
import 'react-toastify/dist/ReactToastify.css';

import HeaderLogoPng from '@/assets/modda-donna-logo.png';
import headerDecor from '@/assets/header__bg-decor.svg';
import headerDecorMobile from '@/assets/header-decor-mobile.svg';

const host = process.env.host

export const Header = ({ header, headContent }) => {
  const form = React.useRef();
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [nameError, setNameError] = React.useState(false);
  const [phoneError, setPhoneError] = React.useState(false);
  const [selectedPrefix, setSelectedPrefix] = React.useState({ value: '+44', label:'UK (+44)', length: 10 })
  const [maskNumber, setMaskNumber] = React.useState('9999 999999')

  const controlStyles = {
    width: 100,
    height: 48,
    borderRadius: 50,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    border: `1px solid ${phoneError ? 'red' : '#252525'}`,
    borderRight: 'transparent',
    fontSize: 14,
    backgroundColor: 'transparent',

    '@media (max-width: 768px)': {
      width: 50,
      height: 40,
      fontSize: 12,
    },

    '&:hover': {
      borderColor: '#252525',
    }
  }

  const placeholderStyles = {
    fontStyle: 'normal',
    fontSize: 14,
    color: '#afaeae',
    '@media (max-width: 768px)': {
      fontSize: 12,
      padding: 0,
      margin: 0
    }
  }

  const dropdownIndicator = {
    color: '#252525',
    '@media (max-width: 768px)': {
      display: 'none'
    }
  }

  const valueContainer = {
    '@media (max-width: 768px)': {
      paddingRight: 2,
    }
  }

  const menuStyles = {
    width: 300,
    '@media (max-width: 768px)': {
      width: 200,
    }
  }

  const indicatorContainerStyles = {
    '@media (max-width: 768px)': {
      padding: 2,
    }
  }

  const formatOptionLabel = (option, { context }) => context === 'value' ? `${option.value}` : option.label;

  const colourStyles = {
    control: (styles) => ({ ...styles, ...controlStyles }),
    placeholder: (styles) => ({ ...styles, ...placeholderStyles }),
    input: (styles) => ({ ...styles, height: 30 }),
    menu: (styles) => ({ ...styles, ...menuStyles }),
    dropdownIndicator: (styles) => ({ ...styles, ...dropdownIndicator }),
    indicatorsContainer: (styles) => ({ ...styles, ...indicatorContainerStyles }),
    valueContainer: (styles) => ({ ...styles, ...valueContainer }),
    indicatorSeparator: (styles) => ({ ...styles, backgroundColor: '#252525' }),
    singleValue: (styles) => ({ ...styles, color: 'white' })
  };

  const handlePrefixSelect = (prefixValues) => {
    setSelectedPrefix(prefixValues)
    setPhone('')
    const maskString = '9'.repeat(4) + ' ' + '9'.repeat(prefixValues.mobileNumberLength - 4)
    setMaskNumber(maskString)
  }

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

    if (phone.includes('_') || phone.replace(' ', '').length !== selectedPrefix.mobileNumberLength) {
      setPhoneError(true);
      return
    }
    if (name.length === 0) {
      setNameError(true);
      return
    }

    if (!phoneError && !nameError && phone.indexOf(' ') && name.indexOf(' ')) {
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
            phone: `${selectedPrefix.value} ${phone}`,
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
                  onChange={(e) => {
                    setName(e.target.value)
                    setNameError(false)
                  }}
                  type="name"
                  placeholder={headContent?.contact_us?.placeholder_1}
                  name="name"
                  className={nameError ? style.input__error : ''}
                />
                <Select
                  className={style.form__select}
                  options={countryPrefixes}
                  placeholder="+44"
                  styles={colourStyles}
                  defaultValue={selectedPrefix.value}
                  onChange={handlePrefixSelect}
                  formatOptionLabel={formatOptionLabel}
                />
                <InputMask
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value)
                    setPhoneError(false)
                  }}
                  type="tel"
                  placeholder={headContent?.contact_us?.placeholder_2}
                  name="phone"
                  mask={maskNumber}
                  className={cx(phoneError ? style.input__error : '', style.form__phoneInput)}
                />
                <Button className={style.form__button}>{headContent?.contact_us?.button}</Button>
                {(phoneError || nameError) && (
                  <p className={style.form__errorMessage}>{`Please enter a valid ${phoneError ? 'phone number' : 'name'}`}</p>
                )}
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
