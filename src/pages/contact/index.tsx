import Link from "next/link";
import styles from "./contact.module.css";
import { FaLinkedin, FaGithub, FaYoutube, FaCodepen } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
            <span>Email:&nbsp;</span>
            <span>lusegardis@gmail.com</span>
          </Link>
          <div className={`${styles.items}`}>
            <Link href="/">
              <FaLinkedin />
              <span>Linkedin</span>
            </Link>
            <Link href="/">
              <FaGithub />
              <span>GitHub</span>
            </Link>
            <Link href="/">
              <FaYoutube />
              <span>YouTube</span>
            </Link>
            <Link href="/">
              <FaXTwitter />
              <span>Twitter</span>
            </Link>
            <Link href="/">
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
