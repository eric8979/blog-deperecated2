import Head from "next/head";
import Link from "next/link";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Eric Whale</title>
      </Head>
      <div className="mx-56 my-4 grid grid-cols-3 content-center place-content-around gap-40">
        <Link href="#">
          <div className={styles.showBoxContainer}>
            <div></div>
            <div>Check out my blog!(latest post)</div>
          </div>
        </Link>
        <Link href="#">
          <div className={styles.showBoxContainer}>
            <div></div>
            <div>Check my latest Project!</div>
          </div>
        </Link>
        <Link href="#">
          <div className={styles.showBoxContainer}>
            <div></div>
            <div>Check my YouTube Channel</div>
          </div>
        </Link>
      </div>
    </>
  );
}

//TODO: Change the architecture of 3 boxes and margin/padding
