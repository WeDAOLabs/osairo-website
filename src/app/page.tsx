import Link from "next/link";
import Image from "next/image";
import mainStyles from "@/styles/main.module.css";

export default function Home() {
  return (
    <>
      <div className={mainStyles.alignCenter}>
        <h1
          style={{
            fontSize: 40,
            textAlign: "center",
          }}
        >
          Osairo Island🏝️
        </h1>
        <h3
          style={{
            textAlign: "center",
            fontSize: 28,
          }}
        >
          An infinite, unstoppable, decentralized Autonomous World!
        </h3>
        <div
          className={mainStyles.alignCenter}
          style={{
            display: "flex",
            marginTop: 10,
          }}
        >
          <Link href="/" target="_blank">
            <Image
              alt="License: AGPL-3.0"
              src="https://img.shields.io/badge/License-AGPL_3.0-green.svg"
              width={120}
              height={120}
            />
          </Link>
        </div>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            alt="osairo world"
            src="https://app.happiairdrop.xyz/osairo-island.png/?"
            width={600}
            height={600}
          />
        </div>
      </div>
    </>
  );
}
