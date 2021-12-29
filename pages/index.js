import Head from "next/head";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import styles from "../styles/home.module.css";

const Home = ({ allPostsData }) => {
  return (
    <div>
      <Head>
        <title>🐋 Eric Whale&apos;s blog</title>
      </Head>
      <div>
        <ol>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className={styles.postItem}>
              <Link href={`/blog/${id}`}>
                <a className={styles.postTitle}>{title}</a>
              </Link>
              <br />
              <small className={styles.postDate}>{date}</small>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default Home;
