import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Maincontent from "../components/Maincontent";
import Sidebar from "../components/Sidebar";
import ContentStickyHeader from "../components/ContentStickyHeader";
export default function Home() {
  const [switchsides, setswitchsides] = useState("unset");
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.homeCarousel}></div>
        <ContentStickyHeader switchsides={switchsides} />
        <div className={styles.contentContainer}>
          <Sidebar setswitchsides={setswitchsides} switchsides={switchsides} />
          <Maincontent />
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
