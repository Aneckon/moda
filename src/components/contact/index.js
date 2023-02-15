import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

import style from '@/styles/Contact.module.scss';

import ContactImage from '@/assets/contact-image.png';
import ContactImage2 from '@/assets/contact-image2.png';

export const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const [contactCords, setContactCords] = React.useState(null);
  const [contactStop, setContactStop] = React.useState(true);

  React.useEffect(() => {
    document.addEventListener('mousemove', function (ev) {
      if (document.getElementById('contact__panel')) {
        if (contactStop === false) {
          document.getElementById('contact__panel').style.top = contactCords.clientY - 200 + 'px';
          document.getElementById('contact__panel').style.left = contactCords.clientX - 180 + 'px';
        } else {
          document.getElementById('contact__panel').style.top = ev.clientY - 200 + 'px';
          document.getElementById('contact__panel').style.left = ev.clientX - 180 + 'px';
        }
      }
    });

    if (inView === false) {
      setContactStop(true);
    }
  }, [contactStop, inView, contactCords]);

  const handleContactStop = (e) => {
    setContactStop(!contactStop);
    setContactCords({ clientY: e.clientY, clientX: e.clientX });
  };

  return (
    <div ref={ref} onClick={handleContactStop} className={style.contact}>
      <div className="container">
        <h2 className={style.title}>
          Don’t miss the chance to become <br /> professional!
        </h2>
        <div className={style.contact__content}>
          <Image className={style.image} src={ContactImage} alt="image" />

          <div className={style.followUs}>
            <p>Follow us:</p>
            <Link href="#">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.7394 3.52066C18.9954 3.52441 20.1988 4.025 21.0869 4.9131C21.975 5.80119 22.4756 7.00463 22.4793 8.26059V17.7394C22.4756 18.9954 21.975 20.1988 21.0869 21.0869C20.1988 21.975 18.9954 22.4756 17.7394 22.4793H8.26059C7.00463 22.4756 5.80119 21.975 4.9131 21.0869C4.025 20.1988 3.52441 18.9954 3.52066 17.7394V8.26059C3.52441 7.00463 4.025 5.80119 4.9131 4.9131C5.80119 4.025 7.00463 3.52441 8.26059 3.52066H17.7394ZM17.7394 1.625H8.26059C4.61094 1.625 1.625 4.61094 1.625 8.26059V17.7394C1.625 21.3891 4.61094 24.375 8.26059 24.375H17.7394C21.3891 24.375 24.375 21.3891 24.375 17.7394V8.26059C24.375 4.61094 21.3891 1.625 17.7394 1.625Z"
                  fill="white"
                />
                <path
                  d="M19.1613 8.25977C18.8801 8.25977 18.6052 8.17637 18.3713 8.02014C18.1375 7.8639 17.9553 7.64183 17.8476 7.38202C17.74 7.12221 17.7119 6.83631 17.7667 6.5605C17.8216 6.28468 17.957 6.03133 18.1559 5.83247C18.3547 5.63362 18.6081 5.4982 18.8839 5.44334C19.1597 5.38847 19.4456 5.41663 19.7054 5.52425C19.9652 5.63187 20.1873 5.81411 20.3435 6.04794C20.4998 6.28177 20.5832 6.55667 20.5832 6.83789C20.5836 7.02473 20.5471 7.2098 20.4757 7.38249C20.4044 7.55519 20.2997 7.71209 20.1676 7.8442C20.0355 7.97632 19.8786 8.08104 19.7059 8.15235C19.5332 8.22366 19.3481 8.26017 19.1613 8.25977ZM13 9.20734C13.75 9.20734 14.4831 9.42973 15.1066 9.84638C15.7302 10.263 16.2162 10.8552 16.5032 11.5481C16.7902 12.241 16.8653 13.0034 16.719 13.7389C16.5727 14.4745 16.2115 15.1501 15.6812 15.6804C15.1509 16.2107 14.4753 16.5718 13.7398 16.7182C13.0042 16.8645 12.2418 16.7894 11.5489 16.5024C10.8561 16.2154 10.2639 15.7294 9.84721 15.1058C9.43055 14.4822 9.20817 13.7491 9.20817 12.9992C9.20924 11.9939 9.60908 11.03 10.32 10.3191C11.0308 9.60826 11.9947 9.20842 13 9.20734ZM13 7.31168C11.8751 7.31168 10.7755 7.64525 9.8402 8.2702C8.90489 8.89515 8.17591 9.78341 7.74544 10.8227C7.31496 11.8619 7.20233 13.0055 7.42179 14.1088C7.64124 15.212 8.18292 16.2254 8.97833 17.0208C9.77374 17.8163 10.7872 18.3579 11.8904 18.5774C12.9937 18.7969 14.1373 18.6842 15.1765 18.2537C16.2158 17.8233 17.104 17.0943 17.729 16.159C18.3539 15.2237 18.6875 14.1241 18.6875 12.9992C18.6875 11.4908 18.0883 10.0441 17.0217 8.97751C15.9551 7.9109 14.5084 7.31168 13 7.31168Z"
                  fill="white"
                />
              </svg>
            </Link>
            <Link href="#">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24.375 13.0686C24.375 6.78696 19.2816 1.6936 13 1.6936C6.71836 1.6936 1.625 6.78696 1.625 13.0686C1.625 18.7459 5.78398 23.4518 11.2227 24.306V16.3577H8.33371V13.0686H11.2227V10.5625C11.2227 7.7122 12.9213 6.13646 15.5193 6.13646C16.7639 6.13646 18.0659 6.35888 18.0659 6.35888V9.15845H16.6309C15.2186 9.15845 14.7768 10.0349 14.7768 10.9358V13.0686H17.9314L17.4276 16.3577H14.7773V24.307C20.216 23.4534 24.375 18.7475 24.375 13.0686Z"
                  fill="white"
                />
              </svg>
            </Link>

            <Link href="#">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M25.1875 5.56056C24.2732 5.95784 23.3057 6.21959 22.3158 6.33751C23.3562 5.72833 24.1385 4.76053 24.5162 3.61563C23.5326 4.19078 22.4583 4.59433 21.3393 4.80899C20.8681 4.31516 20.3014 3.9223 19.6736 3.6543C19.0459 3.3863 18.3702 3.24875 17.6876 3.25001C14.9241 3.25001 12.6877 5.45391 12.6877 8.17071C12.6857 8.54861 12.729 8.92538 12.8167 9.29298C10.835 9.20008 8.8946 8.69456 7.11952 7.80877C5.34444 6.92298 3.7738 5.67642 2.50809 4.14884C2.06404 4.89741 1.82921 5.75151 1.82812 6.62188C1.82812 8.32813 2.71832 9.83634 4.0625 10.7199C3.26611 10.701 2.48604 10.4902 1.78852 10.1055V10.1664C1.78852 12.5531 3.51508 14.5387 5.80023 14.9906C5.37051 15.1052 4.92769 15.1632 4.48297 15.1633C4.1674 15.1638 3.85255 15.1332 3.54301 15.0719C4.17828 17.027 6.02723 18.4488 8.21742 18.4895C6.43773 19.861 4.25274 20.6023 2.00586 20.5969C1.60703 20.5963 1.20858 20.5726 0.8125 20.5258C3.09826 21.9854 5.75527 22.7574 8.46727 22.75C17.677 22.75 22.7084 15.2496 22.7084 8.74454C22.7084 8.53126 22.7028 8.31798 22.6926 8.10977C23.6692 7.41512 24.514 6.55186 25.1875 5.56056Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>

          <div className={style.contact__video}>
            <video preload="true" autoPlay muted>
              <source src={'assets/contact-video.mov'} type="video/mp4" />
            </video>
          </div>
          <div className={style.contact__video2}>
            <video preload="true" autoPlay muted>
              <source src={'assets/contact-video2.mov'} type="video/mp4" />
            </video>
          </div>

          <Image className={style.image2} src={ContactImage2} alt="image" />
        </div>
      </div>
      {inView && (
        <div
          id="contact__panel"
          className={style.contact__info}>
          <p>Contact us:</p>
          <Link href="tel:447404783116" className={style.contact__tel}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.2477 16.11L16.9277 14.43C17.154 14.2066 17.4403 14.0536 17.7518 13.9897C18.0634 13.9258 18.3867 13.9537 18.6827 14.07L20.7302 14.8875C21.0293 15.0089 21.2858 15.2162 21.4673 15.4831C21.6488 15.75 21.7473 16.0647 21.7502 16.3875V20.1375C21.7485 20.3571 21.7023 20.5741 21.6145 20.7753C21.5267 20.9766 21.3991 21.158 21.2393 21.3087C21.0796 21.4594 20.891 21.5761 20.6849 21.652C20.4788 21.7278 20.2595 21.7612 20.0402 21.75C5.69272 20.8575 2.79772 8.70753 2.25022 4.05753C2.22481 3.82918 2.24803 3.59804 2.31836 3.37931C2.38869 3.16058 2.50453 2.95922 2.65827 2.78848C2.81201 2.61774 3.00016 2.48148 3.21034 2.38868C3.42052 2.29587 3.64797 2.24862 3.87772 2.25003H7.50022C7.82348 2.25099 8.13906 2.34863 8.40637 2.5304C8.67368 2.71217 8.8805 2.96976 9.00022 3.27003L9.81772 5.31753C9.93791 5.61233 9.96858 5.93601 9.90588 6.24814C9.84319 6.56027 9.68992 6.847 9.46522 7.07253L7.78522 8.75253C7.78522 8.75253 8.75272 15.3 15.2477 16.11Z"
                fill="#AC865F"
              />
            </svg>
            <span>+447404783116</span>
          </Link>
          <Link href="mailto:academy@modadonnabeauty.com" className={style.contact__email}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.875 4.5H4.125C3.08947 4.5 2.25 5.33947 2.25 6.375V17.625C2.25 18.6605 3.08947 19.5 4.125 19.5H19.875C20.9105 19.5 21.75 18.6605 21.75 17.625V6.375C21.75 5.33947 20.9105 4.5 19.875 4.5Z"
                stroke="#AC865F"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.25 7.5L12 12.75L18.75 7.5"
                stroke="#AC865F"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>academy@modadonnabeauty.com</span>
          </Link>
        </div>
      )}
    </div>
  );
};
