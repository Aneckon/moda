import React from 'react';

import style from '@/styles/AboutCourse.module.scss';

export const AboutCourse = () => {
  return (
    <div id="aboute" className={style.aboutCourse}>
      <div className="container">
        <div className={style.aboutCourse__content}>
          <div className={style.info}>
            <h2 className={style.title}>About course</h2>
            <p>
              The Olga Mankovskaia Training Academy was created out of a love for what we do and
              wanting to share and inspire others. unique learning environment with friendly
              approach where we will help semi-permanent makeup artists realise their potential as
              professionals in the field of Micropigmentation.
            </p>
            <p>
              We have developed our exclusive Top 3 Techniques Course to give you the ultimate
              knowledge. We will help you work towards the skills that will allow you to achieve
              divine semi permanent make up a level that matches to the world stage.
            </p>
          </div>
          <div className={style.benefits}>
            <div className={style.benefits__title}>Benefits:</div>
            <div className={style.benefits__list}>
              <p>Student portal with online video lessons;</p>
              <p>Elite starter kit;</p>
              <p>ABT/VTCT accredited quolification;</p>
              <p>Demonstation from tutor and prictice on live model;</p>
              <p>Limited spaces;</p>
              <p>VIP training available;</p>
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
