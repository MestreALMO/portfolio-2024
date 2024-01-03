import styles from "./bottomBar.module.css";

export const BottomBar = () => {
  return (
    <>
      <ul className={`${styles.content}`}>
        <li className={`${styles.contentButtonSize}`}>
          <button
            className={`${styles.contentButtonSize} ${styles.contentButton}`}
          >
            Home
          </button>
        </li>
        <li className={`${styles.contentButtonSize}`}>
          <button
            className={`${styles.contentButtonSize} ${styles.contentButton}`}
          >
            About
          </button>
        </li>
        <li className={`${styles.contentButtonSize}`}>
          <button
            className={`${styles.contentButtonSize} ${styles.contentButton}`}
          >
            Contact
          </button>
        </li>
        <li className={`${styles.contentButtonSize}`}>
          <button
            className={`${styles.contentButtonSize} ${styles.contentButton}`}
          >
            Portfolio
          </button>
        </li>
      </ul>
    </>
  );
};
