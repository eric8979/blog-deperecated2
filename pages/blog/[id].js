import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import styles from "../../styles/article.module.css";

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={styles.articleBox}>
        <h1 className="text-4xl">{postData.title}</h1>
        <Date dateString={postData.dateString} />
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
