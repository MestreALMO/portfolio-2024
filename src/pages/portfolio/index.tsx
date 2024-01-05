import { ReactNode, useMemo } from "react";
import * as Projects from "./projects";
import Image from "next/image";
import styles from "./portfolio.module.css";
import Link from "next/link";
import { RiCodeSSlashLine } from "react-icons/ri";
import { useTranslations } from "next-intl";
import { GetStaticPropsContext } from "next";

const Portfolio = () => {
  const t = useTranslations("pages.portfolio");

  const automaticHtml = useMemo((): ReactNode[] => {
    return Projects.projects.map((item) => (
      <Link
        key={item}
        href={`https://github.com/MestreALMO/` + item}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.portfolioCard}`}
      >
        <figure className={`${styles.figure}`}>
          <Image
            src={
              `${Projects.githubLink}` +
              `${item}` +
              "/blob/main/_README.md/img01.png?raw=true"
            }
            alt={item}
            width="1919"
            height="1079"
            layout="responsive"
            objectFit="contain"
            className={`${styles.image}`}
            loading="lazy"
          />
          <div className={`${styles.figureContent}`}>
            <RiCodeSSlashLine />
            <figcaption>{item}</figcaption>
          </div>
        </figure>
      </Link>
    ));
  }, []);

  return (
    <>
      <div className={`${styles.main}`}>
        <h1 className={`${styles.mainTitle}`}>{t("title")}</h1>
        <p className={`${styles.warning}`}>{t("warning")}</p>
        <div className={`${styles.content}`}>{automaticHtml}</div>
      </div>
    </>
  );
};
export default Portfolio;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/locales/${locale}.json`)).default,
    },
  };
}
