import Link from "next/link";
import styles from "./contact.module.css";
import { FaLinkedin, FaGithub, FaYoutube, FaCodepen } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import { GetStaticPropsContext } from "next";

const Contact = () => {
  const t = useTranslations("pages.contact");

  return (
    <>
      <div className={`${styles.main}`}>
        <h1 className={`${styles.mainTitle}`}>{t("title")}</h1>
        <div className={`${styles.content}`}>
          <Link
            href={`mailto:lusegardis@gmail.com`}
            target="_blank"
            rel="Email"
            className={`${styles.email}`}
          >
            <span>Email:&nbsp;</span>
            <span>lusegardis@gmail.com</span>
          </Link>
          <div className={`${styles.items}`}>
            <Link
              href="https://www.linkedin.com/in/andr%C3%A9-lusegardis/detail/recent-activity/shares/"
              target="_blank"
              rel="Linkedin"
            >
              <FaLinkedin />
              <span>Linkedin</span>
            </Link>
            <Link
              href="https://github.com/MestreALMO"
              target="_blank"
              rel="GitHub"
            >
              <FaGithub />
              <span>GitHub</span>
            </Link>
            <Link
              href="https://www.youtube.com/@DeveloperALMO"
              target="_blank"
              rel="YouTube"
            >
              <FaYoutube />
              <span>YouTube</span>
            </Link>
            <Link
              href="https://twitter.com/Lusegardis"
              target="_blank"
              rel="Twitter"
            >
              <FaXTwitter />
              <span>Twitter</span>
            </Link>
            <Link
              href="https://codepen.io/MestreALMO"
              target="_blank"
              rel="Codepen"
            >
              <FaCodepen />
              <span>Codepen</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/locales/${locale}.json`)).default,
    },
  };
}
