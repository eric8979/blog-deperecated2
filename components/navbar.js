import Link from "next/link";
import Image from "next/image";
import githubImg from "../public/GitHub-Mark-120px-plus.png";
import linkedinImg from "../public/LI-In-Bug.png";
import Head from "next/head";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <Head>
        <style>
          @import
          url(&apos;https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Nothing+You+Could+Do&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500;1,600&display=swap&apos;);
        </style>
      </Head>
      <div className={styles.container}>
        <Link href="/">
          <h1 className={styles.title}>Eric Whale</h1>
        </Link>
        <nav className={styles.navbar}>
          <Link href="/">
            <h2>blog</h2>
          </Link>
          <Link href="/about">
            <h2>about</h2>
          </Link>
        </nav>
        <ul className={styles.links}>
          <li>
            <a href="https://github.com/eric8979">
              <Image src={githubImg} alt={"GitHub"} height="54" width="54" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/eric-whale-4853301ab/">
              <Image
                src={linkedinImg}
                alt={"LinkedIn"}
                height="54"
                width="63"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
