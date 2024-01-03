import styles from "./bottomBar.module.css";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { TiInfo } from "react-icons/ti";
import { MdContactMail } from "react-icons/md";
import { RiCodeSSlashLine } from "react-icons/ri";

export const BottomBar = () => {
  return (
    <>
      <ul className={`${styles.main}`}>
        <li className={`${styles.mainButtonSize}`}>
          <Link
            href={"/"}
            className={`${styles.mainButtonSize} ${styles.mainButton}`}
          >
            <FaHome />
            Home
          </Link>
        </li>
        <li className={`${styles.mainButtonSize}`}>
          <Link
            href={"/"}
            className={`${styles.mainButtonSize} ${styles.mainButton}`}
          >
            <TiInfo />
            About
          </Link>
        </li>
        <li className={`${styles.mainButtonSize}`}>
          <Link
            href={"/"}
            className={`${styles.mainButtonSize} ${styles.mainButton}`}
          >
            <MdContactMail />
            Contact
          </Link>
        </li>
        <li className={`${styles.mainButtonSize}`}>
          <Link
            href={"/"}
            className={`${styles.mainButtonSize} ${styles.mainButton}`}
          >
            <RiCodeSSlashLine />
            Portfolio
          </Link>
        </li>
      </ul>
    </>
  );
};
