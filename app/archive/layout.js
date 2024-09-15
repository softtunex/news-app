import styles from "./archive.module.css"; // Import the CSS module

export default function Archive({ archive, latest }) {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2>Archive</h2>
        {archive}
      </section>
      <section className={styles.section}>
        <h2>Latest News</h2>
        {latest}
      </section>
    </div>
  );
}
