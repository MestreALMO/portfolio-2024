import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import homeImage from "@/imgs/home.jpg";
import { useTranslations } from "next-intl";
import { GetStaticPropsContext } from "next";

export default function Home() {
  const t = useTranslations("pages.home");

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
        <h1>{t("title")}</h1>
        <p className={`${styles.text}`}>{t("text1")}</p>
        <p className={`${styles.text}`}>{t("text2")}</p>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/locales/${locale}.json`)).default,
    },
  };
}
