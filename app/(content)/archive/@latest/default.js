import NewsList from "@/components/news-list";
import { getLatestNews } from "@/libs/news";
import styles from "../archive.module.css"; // Import CSS module

export default async function LatestArchive() {
  const latestNews = await getLatestNews();

  return (
    <div className={styles.latestNewsContainer}>
      <h1 className={styles.latestNewsTitle}>Latest News</h1>
      <div className={styles.newsGrid}>
        <NewsList news={latestNews} />
      </div>
    </div>
  );
}
