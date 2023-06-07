import React from 'react';

import style from '@/styles/AboutCourse.module.scss';
import ReactMarkdown from 'react-markdown';

export const AboutCourse = ({ title, description, list_title, list }) => {
  return (
    <div id="aboute" className={style.aboutCourse}>
      <div className="container">
        <div className={style.aboutCourse__content}>
          <div className={style.info}>
            <h2 className={style.title}>{title}</h2>
            <ReactMarkdown>{description}</ReactMarkdown>
          </div>
          <div className={style.benefits}>
            <div className={style.benefits__title}>{list_title}</div>
            <div className={style.benefits__list}>
              {list.map(item => (
                <p>{item?.title}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
