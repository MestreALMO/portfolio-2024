import styles from "./bottomBar.module.css";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";

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
          <button className={`${styles.mainButtonSize} ${styles.mainButton}`}>
            About
          </button>
        </li>
        <li className={`${styles.mainButtonSize}`}>
          <button className={`${styles.mainButtonSize} ${styles.mainButton}`}>
            Contact
          </button>
        </li>
        <li className={`${styles.mainButtonSize}`}>
          <button className={`${styles.mainButtonSize} ${styles.mainButton}`}>
            Portfolio
          </button>
        </li>
      </ul>
    </>
  );
};
