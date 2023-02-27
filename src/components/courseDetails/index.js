import React from 'react';
import Image from 'next/image';

import { Button } from '..';

import style from '@/styles/CourseDetails.module.scss';

import Plus from '@/assets/plus.svg';
import Minus from '@/assets/minus.svg';
import CoursImgBg from '@/assets/cours__img.png';
import CoursImgBg1 from '@/assets/cours__img2.png';
import CoursImgBg2 from '@/assets/cours__img3.jpg';
import CoursImgBg3 from '@/assets/cours__img4.png';
import CoursImgBg4 from '@/assets/cours__img5.png';

const AccordionList = [
  {
    id: 1,
    title: 'What you will learn',
    content: [
      {
        id: 1,
        name: 'How to make right sketch for brows, lips and eyes;',
      },
      {
        id: 2,
        name: 'How to fix the shape to not loose shape during the work.;',
      },
      {
        id: 3,
        name: 'How to use right anestopic cream;',
      },
      {
        id: 4,
        name: 'How to work without pain;',
      },
      {
        id: 5,
        name: 'How to achieve the best healed result;',
      },
      {
        id: 6,
        name: 'You will learn Powder Brows, Velour Lips, and Soft Eyeliner;',
      },
      {
        id: 7,
        name: 'How to take a beautiful picture of your work.',
      },
    ],
  },
  {
    id: 2,
    title: 'Career opportunities',
    content: [
      {
        id: 1,
        name: 'Fast Track course;',
      },
      {
        id: 2,
        name: 'Work for yourself at home or mobile;',
      },
      {
        id: 3,
        name: 'Work in a beauty salon;',
      },
      {
        id: 4,
        name: 'Get paid very well (For example, for one procedure length of 2- 3 hours you can get aprx. £300);',
      },
      {
        id: 5,
        name: 'Becoming an Instructor;',
      },
      {
        id: 6,
        name: 'Take place in Permanent Make Up Conferences;',
      },
      {
        id: 7,
        name: 'Become a speaker;',
      },
      {
        id: 8,
        name: 'Create your own school of Permanent Make Up.',
      },
    ],
  },
  {
    id: 3,
    title: 'Payment options',
    content: [
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
    ],
  },
  {
    id: 4,
    title: 'Requirements',
    content: [
      {
        id: 1,
        name: 'Only a good level of spoken and written English is required',
      },
    ],
  },
  {
    id: 5,
    title: 'Qualification',
    content: [
      {
        id: 1,
        name: 'You will finish course with international recognized ABT diploma, which will allow you to take an insurance to work with Permanent Make Up at home or salon.',
      },
      {
        id: 2,
        name: 'Upgrade to VTCT available within academy',
      },
    ],
  },
];

export const CourseDetails = () => {
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
          <h2 className={style.title}>Course details</h2>
          {AccordionList.map((item) => (
            <div key={item.id} className={style.accordion}>
              <div onClick={() => handleActive(item.title)} className={style.accordion__title}>
                <p>{item.title}</p>
                <Image
                  src={accordionIsActive && accordionTitle === item.title ? Minus : Plus}
                  alt="icon"
                />
              </div>
              {accordionIsActive && accordionTitle === item.title ? (
                <div className={style.content}>
                  {item.content.map((content) => (
                    <div
                      key={content.id}
                      className={
                        item.title === 'Payment options' ? style.name__options : style.name
                      }>
                      {item.title === 'Payment options' ? (
                        <>
                          <p>{content.title}</p>
                          {content.content.map((item) => (
                            <p key={item.id} className={style.payment__name}>
                              {item.name}
                            </p>
                          ))}
                        </>
                      ) : (
                        content.name
                      )}
                    </div>
                  ))}
                  {item.title === 'Payment options' && (
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
      <div className={style.images}>
        <div className={style.images__gallery}>
          <div className={style.images__coloumn}>
            <Image src={CoursImgBg} alt="img" />
            <Image src={CoursImgBg3} alt="img" />
          </div>
          <div className={style.images__coloumn}>
            <Image src={CoursImgBg1} alt="img" />
            <Image src={CoursImgBg4} alt="img" />
          </div>
          <div className={style.images__coloumn}>
            <Image src={CoursImgBg2} alt="img" />
          </div>
        </div>
        <Image className={style.imagebg3} src={CoursImgBg2} alt="img" />
      </div>
    </div>
  );
};
