import React from 'react';
import Image from 'next/image';

import { Button } from '..';

import style from '@/styles/CourseDetails.module.scss';

import Plus from '@/assets/plus.svg';
import Minus from '@/assets/minus.svg';
import CoursImgBg from '@/assets/cours__img.png';
import CoursImgBg1 from '@/assets/cours__img2.png';
import CoursImgBg2 from '@/assets/cours__img3.png';
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
    id: 3,
    title: 'Payment options',
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
    id: 4,
    title: 'Requirements',
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
    id: 5,
    title: 'Qualification',
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
];

export const CourseDetails = () => {
  const [accordionIsActive, setAccordionIsActive] = React.useState(false);
  const [accordionTitle, setAccordionTitle] = React.useState('');

  const handleActive = (title) => {
    setAccordionTitle(title);
    setAccordionIsActive(!accordionIsActive);
  };

  return (
    <div className={style.courseDetails}>
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
                    <div key={content.id} className={style.name}>
                      {content.name}
                    </div>
                  ))}
                </div>
              ) : (
                ''
              )}
            </div>
          ))}
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
      <div className={style.images}>
        <div className={style.images__gallery}>
          <div className={style.images__coloumn}>
            <Image src={CoursImgBg} alt="img" />
            <Image src={CoursImgBg3} alt="img" />
          </div>
          <div className={style.images__coloumn}>
            {' '}
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
