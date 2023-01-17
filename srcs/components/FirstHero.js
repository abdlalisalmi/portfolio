import { useMediaQuery } from "@mantine/hooks";
import styles from "../../styles/FirstHero.module.scss";
import LineHero from "../icons/LineHero";
import { CgCode } from "react-icons/cg";
import { HiEnvelope } from "react-icons/hi2";

export default function FirstHero() {
  const matches = useMediaQuery("(min-width: 992px)");

  return (
    <section className={styles.section}>
      <div className={styles.code}>
        <p>
          Abdlalisalmi
          <code>/README.md</code>
        </p>
      </div>
      <div className={styles.leftSide}>
        {matches ? <LineHero /> : <LineHero width={300} height={400} />}
        <span>
          <HiEnvelope size={30} />
        </span>
      </div>
      <div className={styles.content}>
        <h1>
          <span>Hello, I'm </span>
          Abdelaali ES SALMI
        </h1>
        <p>
          I'm a full-stack web developer, I love to build web applications and
          I'm always looking for new challenges.
        </p>
      </div>
    </section>
  );
}
