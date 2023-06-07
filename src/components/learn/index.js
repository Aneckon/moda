import React from 'react';
import style from '@/styles/Learn.module.scss';
import ReactMarkdown from 'react-markdown';

export const Learn = ({ title, description, video_link }) => {

  return (
    <div className={style.learn}>
      <div className="container">
        <h2 className={style.title}>{title}</h2>
        <div className={style.learn__content}>
          <div className={style.learn__text}>
            <ReactMarkdown>
              {description}
            </ReactMarkdown>
          </div>

          <iframe src={video_link}></iframe>
        </div>
      </div>
    </div>
  );
};
