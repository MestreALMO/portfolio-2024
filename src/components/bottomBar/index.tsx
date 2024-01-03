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
            <FaHome className={`${styles.icon}`} />
            Home
          </Link>
        </li>
        <li className={`${styles.mainButtonSize}`}>
          <Link
            href={"/about"}
            className={`${styles.mainButtonSize} ${styles.mainButton}`}
          >
            <TiInfo className={`${styles.icon}`} />
            About
          </Link>
        </li>
        <li className={`${styles.mainButtonSize}`}>
          <Link
            href={"/contact"}
            className={`${styles.mainButtonSize} ${styles.mainButton}`}
          >
            <MdContactMail className={`${styles.icon}`} />
            Contact
          </Link>
        </li>
        <li className={`${styles.mainButtonSize}`}>
          <Link
            href={"/portfolio"}
            className={`${styles.mainButtonSize} ${styles.mainButton}`}
          >
            <RiCodeSSlashLine className={`${styles.icon}`} />
            Portfolio
          </Link>
        </li>
      </ul>
    </>
  );
};
