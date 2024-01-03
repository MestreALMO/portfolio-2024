import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { LuLightbulb, LuLightbulbOff } from "react-icons/lu";
import styles from "@/components/themeSwitcher/ThemeSwitcher.module.css";
import { motion } from "framer-motion";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleCheckbox = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <>
      <button className={`${styles.content}`} onClick={handleCheckbox}>
        <div className={`${styles.circle}`}>
          {theme === "light" ? (
            <LuLightbulb className={`${styles.icon}`} />
          ) : (
            <LuLightbulbOff className={`${styles.icon}`} />
          )}
        </div>
      </button>
    </>
  );
};
