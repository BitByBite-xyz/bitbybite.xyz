import Head from 'next/head'
import Image from 'next/image'
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme, Spacer } from '@nextui-org/react'


import styles from '../styles/Home.module.css'


export default function Home() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

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
