import { ReactNode, useMemo } from "react";
import * as Projects from "./projects";
import Image from "next/image";
import styles from "./portfolio.module.css";
import Link from "next/link";
import { RiCodeSSlashLine } from "react-icons/ri";

const Portfolio = () => {
  const automaticHtml = useMemo((): ReactNode[] => {
    return Projects.projects.map((item) => (
      <Link
        key={item}
        href={`https://github.com/MestreALMO/` + item}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.portfolioCard}`}
      >
        <figure className={`${styles.figure}`}>
          <Image
            src={
              `${Projects.githubLink}` +
              `${item}` +
              "/blob/main/_README.md/img01.png?raw=true"
            }
            alt={item}
            width="1919"
            height="1079"
            layout="responsive"
            objectFit="contain"
            className={`${styles.image}`}
            loading="lazy"
          />
          <div className={`${styles.figureContent}`}>
            <RiCodeSSlashLine />
            <figcaption>{item}</figcaption>
          </div>
        </figure>
      </Link>
    ));
  }, []);

  return (
    <>
      <div className={`${styles.main}`}>
        <h1 className={`${styles.mainTitle}`}>Portfolio</h1>
        <p className={`${styles.warning}`}>
          Click on any project to know more about it!
        </p>
        <div className={`${styles.content}`}>{automaticHtml}</div>
      </div>
    </>
  );
};

export default Portfolio;
