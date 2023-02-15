import React from 'react';
import Image from 'next/image';

import style from '@/styles/WhyUs.module.scss';

import globe from '@/assets/icon/globe-outline.svg';
import gift from '@/assets/icon/gift-outline.svg';
import trophy from '@/assets/icon/trophy-outline.svg';
import videocam from '@/assets/icon/videocam-outline.svg';
import card from '@/assets/icon/card-outline.svg';
import chatbox from '@/assets/icon/chatbox-ellipses-outline.svg';
import hourglass from '@/assets/icon/hourglass-outline.svg';
import thumbs from '@/assets/icon/thumbs-up-outline.svg';
import people from '@/assets/icon/people-outline.svg';
import rocket from '@/assets/icon/rocket-outline.svg';
import ribbon from '@/assets/icon/ribbon-outline.svg';

const WhyUsList = [
  {
    id: 1,
    icon: globe,
    descriptions: 'Worldwide recognized diploma',
  },
  {
    id: 2,
    icon: gift,
    descriptions: 'Starter kit and beauty tunic included',
  },
  {
    id: 3,
    icon: trophy,
    descriptions: 'Gain confidence after course',
  },
  {
    id: 4,
    icon: videocam,
    descriptions: 'Tutorial videos step by step',
  },
  {
    id: 5,
    icon: card,
    descriptions: 'Financially available',
  },
  {
    id: 6,
    icon: chatbox,
    descriptions: 'Group chat access',
  },
  {
    id: 7,
    icon: hourglass,
    descriptions: 'Flexible timing',
  },
  {
    id: 8,
    icon: thumbs,
    descriptions: 'Tutors with latest techniques',
  },
  {
    id: 9,
    icon: people,
    descriptions: 'One big team of professional tutors and students',
  },
  {
    id: 10,
    icon: rocket,
    descriptions: 'More courses available to upgrade your skills',
  },
  {
    id: 11,
    icon: ribbon,
    descriptions: 'Approved by VTCT (internationally recognized certificate) ',
  },
  {
    id: 12,
    icon: ribbon,
    descriptions: 'ABT accredited',
  },
];

export const WhyUs = () => {
  return (
    <div className={style.whyUs}>
      <div className="container">
        <h2 className={style.title}>Why to choose us?</h2>
        <div className={style.whyUs__content}>
          {WhyUsList.map((item) => (
            <div className={style.whyUs__item} key={item.id}>
              <Image src={item.icon} alt="icon" />
              <p>{item.descriptions}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
