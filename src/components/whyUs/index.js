import React from 'react';
import Image from 'next/image';

import style from '@/styles/WhyUs.module.scss';

const host = process.env.host

export const WhyUs = ({ title, cards }) => {
  return (
    <div id='whyus' className={style.whyUs}>
      <div className="container">
        <h2 className={style.title}>{title}</h2>
        <div className={style.whyUs__content}>
          {cards.map((item) => (
            <div className={style.whyUs__item} key={item.id}>
              <img src={`${host}${item?.icon?.data?.attributes?.url}`} alt={item?.icon?.data?.attributes?.alternativeText} />
              <p>{item?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
