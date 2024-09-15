import NewsList from "@/components/news-list";
import { getLatestNews } from "@/libs/news";
import styles from "../archive.module.css"; // Import CSS module
import Image from "next/image";

export default function LatestArchive() {
  const latestNews = getLatestNews().slice(0, 3); // Show only 3 latest news items

  return (
    <div className={styles.latestNewsContainer}>
      <h1 className={styles.latestNewsTitle}>Latest News</h1>
      <div className={styles.newsGrid}>
        {latestNews.map((newsItem) => (
          <div key={newsItem.id} className={styles.newsItem}>
            <Image src={newsItem.image} alt={newsItem.title} />
            <div className={styles.newsItemTitle}>{newsItem.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
