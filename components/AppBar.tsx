"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";
import styles from "../styles/Home.module.css"

const AppBar = () => {
  return (
    <div className={styles.AppHeader}>
      <Image src="/solanaLogo.png" height={30} width={200} alt="logo" />
      <span>Wallet-Adapter Example</span>
      <WalletMultiButton />
    </div>
  );
};

export default AppBar;
