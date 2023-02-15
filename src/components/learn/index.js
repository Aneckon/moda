import React from 'react';
import Image from 'next/image';

import style from '@/styles/Learn.module.scss';

import LearnImage from '@/assets/video__bg.png';

export const Learn = () => {
  const [video, setVideo] = React.useState(false);

  return (
    <div className={style.learn}>
      <div className="container">
        <h2 className={style.title}>Learn from the best</h2>
        <div className={style.learn__content}>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem.
          </p>
          {video ? (
            <video src={'assets/video.mp4'} preload="true" autoPlay />
          ) : (
            <div onClick={() => setVideo(true)} className={style.image}>
              <Image src={LearnImage} alt="image" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
