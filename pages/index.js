import styles from "../styles/Home.module.scss";
import FirstHero from "../srcs/components/FirstHero";
import Layout from "../srcs/layouts/Layout";

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <FirstHero />
      </main>
    </Layout>
  );
}
