import Image from "next/image";
import styles from "../app/news/news.module.css";
import Link from "next/link";

export default function NewsList({ news }) {
  return (
    <ul className={styles.newsList}>
      {news.map((newsItem) => (
        <li key={newsItem.id} className={styles.newsItem}>
          <Link href={`/news/${newsItem.slug}`}>
            <div className={styles.imageWrapper}>
              <Image
                src={newsItem.image}
                alt={newsItem.title}
                width={300}
                height={200}
                objectFit="cover"
              />
            </div>
            <span className={styles.newsTitle}>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
