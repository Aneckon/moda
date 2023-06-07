import React from 'react';
import style from '@/styles/Partners.module.scss';

const host = process.env.host

export const Partners = ({ title, partners }) => {
  return (
    <div className={style.partners}>
      <div className="container">
        <h2 className={style.title}>{title}</h2>
        <div className={style.partners__content}>
          {partners?.data.map(item => (
            <img key={item.id} src={`${host}${item?.attributes?.url}`} alt={item?.attributes?.alternativeText} />
          ))}
        </div>
      </div>
    </div>
  );
};
