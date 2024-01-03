import { ThemeSwitcher } from "../themeSwitcher";
import styles from "./topBar.module.css";

export const TopBar = () => {
  return (
    <>
      <div className={`${styles.content}`}>
        <h3 className={`${styles.logo}`}>André Lusegardis</h3>
        <ThemeSwitcher />
      </div>
    </>
  );
};
