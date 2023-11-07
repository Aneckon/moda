import React from 'react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

import style from '@/styles/Contact.module.scss';

const host = process.env.host

export const Contact = ({ title, photo_1, photo_2, video_1, video_2, follow_us, contact_us }) => {
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
          {title}
        </h2>
        <div className={style.contact__content}>
          <img className={style.image} src={`${host}${photo_1?.data?.attributes?.url}`} alt={photo_1?.data?.attributes?.alternativeText} />
          <div className={style.followUs}>
            <p>{follow_us.title}</p>
            {follow_us?.socials.map(social => (
              <Link key={social?.id} target='_blank' href={social?.link}>
                <img src={`${host}${social?.icon?.data?.attributes?.url}`} alt={social?.icon?.data?.attributes?.alternativeText} />
              </Link>
            ))}
          </div>

          <div className={style.contact__video}>
            <video
              loop
              playsInline
              preload="true"
              type="video/mp4"
              autoPlay
              muted
              controls={false}
              src={`${host}${video_1?.data?.attributes?.url}`}
            />
          </div>
          <div className={style.contact__video2}>
            <video
              loop
              playsInline
              preload="true"
              type="video/mp4"
              autoPlay
              muted
              controls={false}
              src={`${host}${video_2?.data?.attributes?.url}`}
            />
          </div>

          <img className={style.image2} src={`${host}${photo_2?.data?.attributes?.url}`} alt={photo_2?.data?.attributes?.alternativeText} />
        </div>
      </div>
      {inView && (
        <div id="contact__panel" className={style.contact__info}>
          <p>{contact_us.title}</p>
          {contact_us?.contacts.map(contact => (
            <Link href={contact.href} className={style.contact__tel}>
              <img src={`${host}${contact?.icon?.data?.attributes?.url}`} alt={contact?.icon?.data?.attributes?.alternativeText} />
              <span>{contact?.title}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
