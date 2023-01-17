import Head from "next/head";
import styles from "../../styles/Layout.module.scss";

export default function Layout({
  children,
  title = "Abdlalisalmi : Portfolio",
  description = "Abdlalisalmi personal portfolio",
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <div className={styles.content}>{children}</div>
      </main>
    </>
  );
}
