import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import homeImage from "@/imgs/home.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>André Lusegardis' Portfolio</title>
        <meta name="description" content="André Lusegardis' Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={`${styles.homeImg}`}>
          <Image
            alt="André Lusegardis"
            src={homeImage}
            layout="responsive"
            objectFit="contain"
            style={{ borderRadius: "50%" }}
            loading="lazy"
          />
        </div>
        <h1>Welcome!</h1>
        <p className={`${styles.text}`}>
          I'm André Lusegardis Miranda de Oliveira,
        </p>
        <p className={`${styles.text}`}>It's a pleasure to have you here.</p>
      </main>
    </>
  );
}
