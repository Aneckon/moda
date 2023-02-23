import React from 'react';
import Image from 'next/image';

import style from '@/styles/Learn.module.scss';

import Play from '@/assets/play.svg';

export const Learn = () => {
  const [video, setVideo] = React.useState(false);

  return (
    <div className={style.learn}>
      <div className="container">
        <h2 className={style.title}>Learn from the best</h2>
        <div className={style.learn__content}>
          <div className={style.learn__text}>
            <p>
              Olga Mankovskaia is Certified and qualified international master and trainer of
              Permanent Makeup and Microblading with more than 10 years of experience in beauty
              industry.
            </p>
            <ul>
              <li>Award Winner ,,Top Trainer 2020 “</li>
              <li>Finalist PMU Conference 2020 </li>
              <li>1st place winner in category ,, Lipstick Effect’’ at Wulop 2022</li>
            </ul>
            <p>
              She has successfully completed more than 50 PMU trainings all over the world. Founder
              of Moda Donna Beauty and PMU Academy approved VTCT, ABT and CPD, based in London,
              Canary Wharf. She developed a special training materials and program for students;
              created her own unique winner technique ,, Perfect Lips’
            </p>
            <ul>
              <li>
                NON-stop speaker at final conference and championship WULOP 2021, Turkey{' '}
                <svg
                  width="10px"
                  height="10px"
                  viewBox="0 0 36 36">
                  <path
                    fill="#E30917"
                    d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"></path>
                  <path
                    fill="#EEE"
                    d="M16 24a6 6 0 1 1 0-12c1.31 0 2.52.425 3.507 1.138A7.332 7.332 0 0 0 14 10.647A7.353 7.353 0 0 0 6.647 18A7.353 7.353 0 0 0 14 25.354c2.195 0 4.16-.967 5.507-2.492A5.963 5.963 0 0 1 16 24zm3.913-5.77l2.44.562l.22 2.493l1.288-2.146l2.44.561l-1.644-1.888l1.287-2.147l-2.303.98l-1.644-1.889l.22 2.494z"></path>
                </svg>
              </li>
              <li>
                NON-stop speaker at PMU Inspiration Fest Conference, Ukraine
                <svg
                  width="10px"
                  height="10px"
                  viewBox="0 0 36 36">
                  <path fill="#005BBB" d="M32 5H4a4 4 0 0 0-4 4v9h36V9a4 4 0 0 0-4-4z"></path>
                  <path fill="#FFD500" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-9h36v9z"></path>
                </svg>
              </li>
              <li>
                NON-stop speaker WULOP 2022 Ireland
                <svg
                  width="10px"
                  height="10px"
                  viewBox="0 0 36 36">
                  <path fill="#169B62" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5H4z"></path>
                  <path fill="#EEE" d="M12 5h12v26H12z"></path>
                  <path fill="#FF883E" d="M32 5h-8v26h8a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"></path>
                </svg>
              </li>
              <li>
                NON-stop speaker WULOP 2022 Turkey
                <svg
                  width="10px"
                  height="10px"
                  viewBox="0 0 36 36">
                  <path
                    fill="#E30917"
                    d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"></path>
                  <path
                    fill="#EEE"
                    d="M16 24a6 6 0 1 1 0-12c1.31 0 2.52.425 3.507 1.138A7.332 7.332 0 0 0 14 10.647A7.353 7.353 0 0 0 6.647 18A7.353 7.353 0 0 0 14 25.354c2.195 0 4.16-.967 5.507-2.492A5.963 5.963 0 0 1 16 24zm3.913-5.77l2.44.562l.22 2.493l1.288-2.146l2.44.561l-1.644-1.888l1.287-2.147l-2.303.98l-1.644-1.889l.22 2.494z"></path>
                </svg>
              </li>
            </ul>
            <h5>
              Olga believes that if you love your craft, work hard and believe in yourself, you can
              achieve anything. The key is to know exactly what you want and to take tiny little
              steps towards your goal every single day.
            </h5>
          </div>

          <iframe src="https://www.youtube.com/embed/12Q_y8ij8aI"></iframe>
        </div>
      </div>
    </div>
  );
};
