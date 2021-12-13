import Head from "next/head";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";

const Blog = ({ allPostsData }) => {
  return (
    <>
      <Head>
        <title>EricWhale-blog</title>
      </Head>
      <div>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/blog/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>{date}</small>
            </li>
          ))}
        </ul>
      </div>
    </>
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

export default Blog;
