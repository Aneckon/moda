import React from 'react';
import CountUp from 'react-countup';

import style from '@/styles/Stats.module.scss';

export const Stats = () => {
  return (
    <div className={style.stats}>
      <div className="container">
        <div className={style.stats__content}>
          <div className={style.stats__item}>
            <CountUp className={style.number} end={2689} />
            <p className={style.name}>students</p>
          </div>
          <div className={style.stats__item}>
            <CountUp className={style.number} end={36765} />
            <p className={style.name}>hours of experience</p>
          </div>
          <div className={style.stats__item}>
            <CountUp className={style.number} end={14} />
            <p className={style.name}>internationally certified techniques</p>
          </div>
          <div className={style.stats__item}>
            <CountUp className={style.number} end={86} />
            <p className={style.name}>international prizes won </p>
          </div>
        </div>
      </div>
    </div>
  );
};
