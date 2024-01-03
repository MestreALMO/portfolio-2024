import styles from "./portfolio.module.css";

const Portfolio = () => {
  return (
    <>
      <div className={`${styles.main}`}>
        <h1 className={`${styles.mainTitle}`}>Portfolio</h1>
        <div className={`${styles.texts}`}>
          <p>
            I'm a developer focused in the front-end, my speciality being web
            development, the coding I'm use to work with are: NextJS, ReactJS,
            TypeScript, JavaScript, HTML, CSS, PHP.
          </p>
          <p>
            Since I was a kid, I always dreamed about being a developer, making
            my owns softwares. As the years gonne by, with me putting lots of
            efforts and time to make my dreams come true, I made it true and
            became a developer.
          </p>
          <p>
            Today here I am with my diploma (Bachelor's degrees in information
            systems), lot's of systems developed and this site of my own making.
          </p>
          <p>
            Among my main hobbies are: Developing; Watching series, animes,
            youtube; Gaming on PC, consoles and tabletop RPG; Reading romances,
            some of the books I loved are Harry Potter, Percy Jackson and the
            Olympians, Eragon, The Walking Dead.
          </p>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
