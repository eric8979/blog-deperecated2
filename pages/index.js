import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>EricWhale</title>
      </Head>
      <div>
        <Link href="">latest blog post 1</Link>{" "}
        <Link href="">latest blog post 2</Link>
        <br />
        <Link href="">latest project 1 (github link)</Link>{" "}
        <Link href="">latest project 2 (github link)</Link>
        <br />
        <Link href="">latest YouTube Video</Link>
      </div>
      <br />

      {/* [Express myself (short description of me using */}
      {/* img/gif/videoClip/background/character...) on this page] */}
    </>
  );
}
