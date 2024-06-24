import Head from "next/head";
import styles from "../styles/Home.module.css";
import AppBar from "@/components/AppBar";
import PingButton from "../components/PingButton";

import React from "react";

const page = () => {
  return (
    <div className={styles.App}>
      <Head>
        <title>Wallet-Adapter Example</title>
        <meta name="decription" content="Wallet-Adapter Example" />
      </Head>
      <AppBar />
      <div className={styles.AppBody}>
        <PingButton />
      </div>
    </div>
  );
};

export default page;
