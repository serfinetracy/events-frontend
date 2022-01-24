import Head from "next/head";
import {useRouter} from 'next/router';
import Header from "./Header";
import Footer from "./Footer";
import ShowCase from "./ShowCase";
import styles from "../styles/Layout.module.css";
import next from "next";

export default function Layout({ title, keywords, description, children }) {
  // children is provided for free by next.js. you dont create it, you just mention it. its anything inside layout
  const router = useRouter();
  console.log(router);
  
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="{description}" />
        <meta name="keywords" content="{keywords}" />
      </Head>
      <Header />
      {router.pathname === "/" &&  <ShowCase/>} 
      <div className={styles.container}>{children}</div>
      <Footer/>
    </div>
  );
}

Layout.defaultProps = {
  title: "FemiEvents",
  description: "Find the latest musical events and concerts",
  keywords: "music, dance, bands, rock",
};
