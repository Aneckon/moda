import React from 'react';
import Image from 'next/image';

import style from '@/styles/Partners.module.scss';

import logoVtct from '@/assets/partners/vtct.png';
import logoAbt from '@/assets/partners/abt.jpg';
import logoCpd from '@/assets/partners/cpd.png';

export const Partners = () => {
  return (
    <div className={style.partners}>
      <div className="container">
        <h2 className={style.title}>Our partners</h2>
        <div className={style.partners__content}>
          <Image src={logoVtct} alt="logo" />
          <Image src={logoAbt} alt="logo" />
          <Image src={logoCpd} alt="logo" />
        </div>
      </div>
    </div>
  );
};
