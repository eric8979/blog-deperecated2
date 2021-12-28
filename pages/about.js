import Head from "next/head";
import Link from "next/link";
import styles from "../styles/about.module.css";

const About = () => {
  return (
    <>
      <Head>
        <title>🐋 about</title>
      </Head>
      <div className={styles.container}>
        <h2 className={styles.title}>
          🐋 Hi! I'm Eric Whale. Welcome to my blog!
        </h2>
        <small className={styles.date}>- Updated on 28/12/2021</small>

        <div>
          <h3 className={styles.subtitle}>Bio</h3>
          <ul>
            <li>
              🏛 University Studet - <b>Computer Science and Engineering</b>{" "}
              major.
            </li>
            <li>
              🗣 <b>Python, JavaScript</b>
            </li>
            <li>
              🕸 Interested in:<b> Back-End</b>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={styles.subtitle}>
            <Link href="https://www.youtube.com/channel/UCEb4WYnanZcA-1KzBIDxLZA">
              YouTube Channel
            </Link>
          </h3>
          <span>
            📹 Solve real life problems with Data Structure and Algorithms.
          </span>
        </div>

        <div>
          <h3 className={styles.subtitle}>Coding Projects</h3>
          <ul className={styles.ul}>
            <li>
              <Link href="#">First project link- coming soon!</Link>
            </li>
            <li>
              <Link href="#">Second project link- coming soon!</Link>
            </li>
            <li>
              <Link href="#">Third project link- coming soon!</Link>
            </li>
          </ul>
        </div>

        {/* <div> */}
        {/*   <h3 className={styles.subtitle}>Leadership & Awards</h3> */}
        {/*   <ul className={styles.ul}> */}
        {/*     <li></li> */}
        {/*   </ul> */}
        {/* </div> */}

        {/* <div> */}
        {/*   <h3 className={styles.subtitle}>Experience</h3> */}
        {/*   <ul className={styles.ul}> */}
        {/*     <li></li> */}
        {/*   </ul> */}
        {/* </div> */}

        <div>
          <h3 className={styles.subtitle}>Fun Facts</h3>
          <ul className={styles.ul}>
            <li>🚀 Love Space and Space Tech</li>
            <li>🎹 Can play Chopin Nocturne op.48 no.1 (and more)</li>
            <li>♟ Top 9.5% on Chess.com (Daily chess score)</li>
          </ul>
        </div>

        {/* TODO: Add youtube channel link */}
        {/* TODO: Projects - github link */}
      </div>
    </>
  );
};

export default About;
