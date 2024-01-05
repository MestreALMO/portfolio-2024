import { useTranslations } from "next-intl";
import styles from "./about.module.css";
import { GetStaticPropsContext } from "next";

const About = () => {
  const t = useTranslations("pages.about");

  return (
    <>
      <div className={`${styles.main}`}>
        <h1 className={`${styles.mainTitle}`}>{t("title")}</h1>
        <div className={`${styles.texts}`}>
          <p>{t("text1")}</p>
          <p>{t("text2")}</p>
          <p>{t("text3")}</p>
          <p>{t("text4")}</p>
        </div>
      </div>
    </>
  );
};
export default About;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/locales/${locale}.json`)).default,
    },
  };
}
