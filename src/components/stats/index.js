import React from 'react';
import CountUp from 'react-countup';

import style from '@/styles/Stats.module.scss';

export const Stats = ({ counters }) => {
  return (
    <div className={style.stats}>
      <div className="container">
        <div className={style.stats__content}>
          {counters.map(counter => (
            <div key={counter?.id} className={style.stats__item}>
              <CountUp className={style.number} end={parseInt(counter?.number)} />
              <p className={style.name}>{counter?.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
