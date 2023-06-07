import React from 'react';
import Image from 'next/image';

import { Button } from '..';

import style from '@/styles/CourseDetails.module.scss';

import Plus from '@/assets/plus.svg';
import Minus from '@/assets/minus.svg';

const host = process.env.host

const paymentDrop = [
  {
    id: 1,
    title: 'Deposit',
    content: [
      {
        id: 1,
        name: 'Deposit (£);',
      },
      {
        id: 2,
        name: 'Balance (£), payable on course date;',
      },
    ],
  },
  {
    id: 2,
    title: 'Card',
    content: [
      {
        id: 1,
        name: 'Place a deposit;',
      },
      {
        id: 2,
        name: 'Pay balance 7 Days before Course Start;',
      },
    ],
  },
  {
    id: 3,
    title: 'Cash',
    content: [
      {
        id: 1,
        name: 'Place a deposit;',
      },
      {
        id: 2,
        name: 'Pay balance on the day of the course.',
      },
    ],
  },
]

const CourseDetails = ({ title, collage_photos, image, dropdown, button }) => {
  const newDropdown = dropdown.map(item => {
    if (item.dropdown_title === 'Payment options') {
      return {
        ...item,
        dropdown_list: paymentDrop
      }
    }

    return item
  })
  const [accordionIsActive, setAccordionIsActive] = React.useState(false);
  const [accordionTitle, setAccordionTitle] = React.useState('');

  const handleActive = (title) => {
    setAccordionTitle(title);
    setAccordionIsActive(!accordionIsActive);
  };

  const handleClickScroll = () => {
    const element = document.getElementById('header');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="course" className={style.courseDetails}>
      <div className="container">
        <div className={style.courseDetails__content}>
          <h2 className={style.title}>{title}</h2>
          {newDropdown.map((item) => (
            <div key={item?.id} className={style.accordion}>
              <div onClick={() => handleActive(item?.dropdown_title)} className={style.accordion__title}>
                <p>{item?.dropdown_title}</p>
                <Image
                  src={accordionIsActive && accordionTitle === item?.dropdown_title ? Minus : Plus}
                  alt="icon"
                />
              </div>
              {accordionIsActive && accordionTitle === item?.dropdown_title ? (
                <div className={style.content}>
                  {item?.dropdown_list.map((content) => (
                    <div
                      key={content?.id}
                      className={
                        item?.dropdown_title === 'Payment options' ? style.name__options : style.name
                      }>
                      {item?.dropdown_title === 'Payment options' ? (
                        <>
                          <p>{content?.title}</p>
                          {content.content.map((item) => (
                            <p key={item.id} className={style.payment__name}>
                              {item.name}
                            </p>
                          ))}
                        </>
                      ) : (
                        content?.title
                      )}
                    </div>
                  ))}
                  {item?.dropdown_title === 'Payment options' && (
                    <>
                      <div className={style.options}>
                        <h3>Pay with Klarna</h3>
                        <p>Pay Now</p>
                        <p>
                          Simply pay for your new kicks in a few clicks. Klarna remembers all of
                          your info so you don’t have to. Easy peasy.
                        </p>
                      </div>
                      <div className={style.options}>
                        <p>Pay later</p>
                        <p>
                          Simply hit ‘Pay Later’ when you checkout and don’t worry, there’s no pesky
                          passwords to remember. Simply try them on, look good – no sweat – Klarna
                          will email you reminding you to pay up 30 days after shipping. <br />
                          <br /> Not making your payment on time could affect your ability to use
                          Klarna in the future. Debt collection agencies are used as a last resort.
                          You must be 18+ and a UK resident to be eligible for this credit offer.
                        </p>
                      </div>
                      <div className={style.options}>
                        <p>Pay in 3</p>
                        <p>
                          All you have to do is select ‘Pay in 3’ at the checkout and the first
                          instalment will be taken when your order is confirmed. No interest, no
                          hassle. Easy, right?
                        </p>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                ''
              )}
            </div>
          ))}
          <Button click={handleClickScroll} className={style.button}>
            {button?.title}
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
      <div className={style.images}>
        <div className={style.images__gallery}>
          <div className={style.images__coloumn}>
            <img src={`${host}${collage_photos?.data[0]?.attributes?.url}`} alt={collage_photos?.data[0]?.attributes?.url} />
            <img src={`${host}${collage_photos?.data[2]?.attributes?.url}`} alt={collage_photos?.data[2]?.attributes?.url} />
          </div>
          <div className={style.images__coloumn}>
            <img src={`${host}${collage_photos?.data[1]?.attributes?.url}`} alt={collage_photos?.data[1]?.attributes?.url} />
            <img src={`${host}${collage_photos?.data[3]?.attributes?.url}`} alt={collage_photos?.data[3]?.attributes?.url} />
          </div>
          <div className={style.images__coloumn}>
            <img src={`${host}${image?.data?.attributes?.url}`} alt={image?.data?.attributes?.alternativeText} />
          </div>
        </div>
        <img className={style.imagebg3} src={`${host}${image?.data?.attributes?.url}`} alt={image?.data?.attributes?.alternativeText} />
      </div>
    </div>
  );
};

export default CourseDetails
