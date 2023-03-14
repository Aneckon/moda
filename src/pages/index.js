import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

import styles from '@/styles/Home.module.scss';

import {
  AboutCourse,
  Contact,
  CourseDetails,
  Footer,
  Header,
  Learn,
  Partners,
  Reviews,
  Stats,
  WhyUs,
} from '@/components';

export default function Home() {
  const headerRef = React.useRef(null);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="facebook-domain-verification" content="ujp7hs78q0tqjtav1f58e58h6077ix" />
        <link rel="icon" href="/favicon.ico" />
        {/* <!-- Google Tag Manager --> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TSPTKGQ');`,
          }}></script>
        {/* <!-- End Google Tag Manager --> */}
      </Head>

      <Header />

      <main className={styles.main}>
        <Stats />
        <AboutCourse />
        <CourseDetails />
        <Learn />
        <WhyUs />
        <Partners />
        <Reviews />
        <Contact />
      </main>

      <Footer />

      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TSPTKGQ"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}></iframe>
      </noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}
    </>
  );
}
