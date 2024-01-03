import Link from "next/link";
import styles from "./contact.module.css";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className={`${styles.main}`}>
        <h1 className={`${styles.mainTitle}`}>Contact</h1>
        <div className={`${styles.content}`}>
          <Link
            href={`mailto:lusegardis@gmail.com`}
            className={`${styles.email}`}
          >
            <span>Email: </span>
            <span>lusegardis@gmail.com</span>
          </Link>
          <div className={`${styles.items}`}>
            <Link href="/">
              <FaLinkedin />
              <span>Linkedin</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
