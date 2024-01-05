import styles from "./bottomBar.module.css";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { TiInfo } from "react-icons/ti";
import { MdContactMail } from "react-icons/md";
import { RiCodeSSlashLine } from "react-icons/ri";
import { useTranslations } from "next-intl";
import { GetStaticPropsContext } from "next";

export const BottomBar = () => {
  const t = useTranslations("components.bottomBar");

  return (
    <>
      <ul className={`${styles.main}`}>
        <li className={`${styles.mainButtonSize}`}>
          <Link
            href={"/"}
            className={`${styles.mainButtonSize} ${styles.mainButton}`}
          >
            <FaHome className={`${styles.icon}`} />
            {t("home")}
          </Link>
        </li>
        <li className={`${styles.mainButtonSize}`}>
          <Link
            href={"/about"}
            className={`${styles.mainButtonSize} ${styles.mainButton}`}
          >
            <TiInfo className={`${styles.icon}`} />
            {t("about")}
          </Link>
        </li>
        <li className={`${styles.mainButtonSize}`}>
          <Link
            href={"/contact"}
            className={`${styles.mainButtonSize} ${styles.mainButton}`}
          >
            <MdContactMail className={`${styles.icon}`} />
            {t("contact")}
          </Link>
        </li>
        <li className={`${styles.mainButtonSize}`}>
          <Link
            href={"/portfolio"}
            className={`${styles.mainButtonSize} ${styles.mainButton}`}
          >
            <RiCodeSSlashLine className={`${styles.icon}`} />
            {t("portfolio")}
          </Link>
        </li>
      </ul>
    </>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/locales/${locale}.json`)).default,
    },
  };
}
