import React from 'react';

import style from '@/styles/AboutCourse.module.scss';

export const AboutCourse = () => {
  return (
    <div id='aboute' className={style.aboutCourse}>
      <div className="container">
        <div className={style.aboutCourse__content}>
          <div className={style.info}>
            <h2 className={style.title}>About course</h2>
            <p>
              Semi-Permanent Makeup, implants pigment under <br /> the skin using a specially designed
              machine tool with disposable needles. <br /> It allows a skilled semi-permanent make-up
              artist to create a realistic and <br /> natural finish. <br /> Learn the most exciting and
              financially rewarding treatments.
            </p>
            <p>
              They are very popular with salon and show no sign <br /> of slowing down! <br /> Machine and Manual
              Courses are available <br /> for Beginner & Advanced masters.
            </p>
          </div>
          <div className={style.benefits}>
            <div className={style.benefits__title}>Benefits:</div>
            <div className={style.benefits__list}>
              <p>Max of 4 students per class;</p>
              <p>VIP training available;</p>
              <p>Course manual;</p>
              <p>Starter Kit (on request);</p>
              <p>ABT accredited qualification;</p>
              <p>Practise on live models;</p>
              <p>
                Regular support and coaching throughout the training period and on-going aftercare
                support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
