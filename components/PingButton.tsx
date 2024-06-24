"use client";

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";
import styles from "../styles/PingButton.module.css";
import { useState } from "react";
import Link from "next/link";

const PROGRAM_ID = `ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa`;
const DATA_ACCOUNT_PUBKEY = `Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod`;

const PingButton = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const [signature, setSignature] = useState<string | null>(null);

  const onClick = () => {
    if (!connection || !publicKey) {
      alert("You have to connect your wallet to Ping!");
    }

    const programId = new web3.PublicKey(PROGRAM_ID);
    const programDataAccount = new web3.PublicKey(DATA_ACCOUNT_PUBKEY);
    const transaction = new web3.Transaction();

    const instruction = new web3.TransactionInstruction({
      keys: [
        {
          pubkey: programDataAccount,
          isSigner: false,
          isWritable: true,
        },
      ],
      programId,
    });

    transaction.add(instruction);
    sendTransaction(transaction, connection).then((sig) => setSignature(sig));
  };
  return (
    <div>
      <p>Ready to ping?</p>
      {publicKey && !signature && (
        <div className={styles.buttonContainer} onClick={onClick}>
          <button className={styles.button}>Ping!</button>
        </div>
      )}
      {signature && (
        <Link
          href={`https://explorer.solana.com/tx/${signature}?cluster=devnet`}
          className={styles.view}
        >
          View on solana explorer
        </Link>
      )}
    </div>
  );
};

export default PingButton;
