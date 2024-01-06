import * as Projects from "./projects";
import Image from "next/image";
import styles from "./portfolio.module.css";
import Link from "next/link";
import { RiCodeSSlashLine } from "react-icons/ri";
import { useTranslations } from "next-intl";
import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";

const Portfolio = () => {
  const t = useTranslations("pages.portfolio");
  const router = useRouter();

  const automaticHtml = () => {
    return Projects.projectsInfo.map((item) => (
      <Link
        key={item.title}
        href={`https://github.com/MestreALMO/` + item.title}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.portfolioCard}`}
      >
        <figure className={`${styles.figure}`}>
          <Image
            src={
              `${Projects.githubLink}` +
              `${item.title}` +
              "/blob/main/_README.md/img01.png?raw=true"
            }
            alt={item.title}
            width="1919"
            height="1079"
            layout="responsive"
            objectFit="contain"
            className={`${styles.image}`}
            loading="lazy"
          />
          <div className={`${styles.figureContent}`}>
            <RiCodeSSlashLine />
            <div>
              <figcaption className={`${styles.figCaptionTitle}`}>
                {item.title}
              </figcaption>
              <figcaption className={`${styles.figCaptionText}`}>
                {router.locale === "en"
                  ? item.en
                  : router.locale === "pt"
                  ? item.pt
                  : item.fr}
              </figcaption>
            </div>
          </div>
        </figure>
      </Link>
    ));
  };

  return (
    <>
      <div className={`${styles.main}`}>
        <h1 className={`${styles.mainTitle}`}>{t("title")}</h1>
        <p className={`${styles.warning}`}>{t("warning")}</p>
        <div className={`${styles.content}`}>{automaticHtml()}</div>
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
