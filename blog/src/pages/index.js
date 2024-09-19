import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import Layout from "../components/Layout";
import { getPostsData } from "@/lib/post";

import styles from "@/styles/Home.module.css";
import utilStyle from "../styles/utils.module.css";

//SSGの場合
export async function  getStaticProps() {
  const allPostsData = getPostsData() //id, title, thumbnail
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

//SSRの場合
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       //コンポーネントに渡すためのprops
//     }
//   }
// }

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <section className={utilStyle.headingMd}>
        <p>
          私はフルスタックエンジニアです/Udemy講師として活動しています/好きな言語はJavaScriptです
        </p>
      </section>

      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({id, title, date, thumbnail}) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img 
                  src={`${thumbnail}`}
                  className={styles.thumbnailImage}
                />
              </Link>
              <Link href={`/posts/${id}`}>
                <div className={utilStyle.boldText}>{title}</div>
              </Link>
              <br />
              <small className={utilStyle.lightText}>
                {date}
              </small>
            </article>
          ))}
          
        </div>
      </section>

      
    </Layout>
  );
}
