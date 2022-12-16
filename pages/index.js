import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme, Spacer } from '@nextui-org/react'

import Script from 'next/script'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";

import styles from '../styles/Home.module.css'

// Initialize Firebase

const firebaseConfig = {
  apiKey: "AIzaSyBf3BhZKvqIaUwOHRnqgm89qUbuoklcLrM",
  authDomain: "bitbybite-dotxyz.firebaseapp.com",
  projectId: "bitbybite-dotxyz",
  storageBucket: "bitbybite-dotxyz.appspot.com",
  messagingSenderId: "338156763075",
  appId: "1:338156763075:web:244b7e02af1c899b5cef76",
  measurementId: "G-1E858JGC2R"
};



export default function Home() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();


  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const perf = getPerformance(app);

  },[])


  return (
    <div className={styles.container}>
      <Head>
        <title>BitByBite.xyz</title>
        <meta name="description" content="BitByBite.xyz" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>


      {/*<!-- Global site tag (gtag.js) - Google Analytics -->*/}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-1E858JGC2R"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-1E858JGC2R');
        `}
      </Script>
      
      


      <main className={styles.main}>
        <h1 className={styles.title}>
          Bit<a href="https://github.com/BitByBite-xyz">By</a>Bite
        </h1>

        <Spacer />

        
        <Spacer />
        <div className={styles.grid}>


          <a href="https://github.com/BitByBite-xyz" className={styles.card}>
            <h2>github &rarr;</h2>
            <p>
              📖📖📖
            </p>
          </a>

          <a
            href="https://github.com/orgs/BitByBite-xyz/people"
            className={styles.card}
          >
            <h2>people &rarr;</h2>
            <p>🧑‍💻🧑‍💻🧑‍💻</p>
          </a>


        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          &#169; BitByBite 2022
        </a>
      </footer>
    </div>
  )
}
