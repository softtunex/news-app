import Link from "next/link";
import Image from "next/image"; // Import Image component
import styles from "./news.module.css";
import { DUMMY_NEWS } from "@/dummy-news";

const News = () => {
  return (
    <>
      <h2 className={styles.pageTitle}>News</h2>
      <ul className={styles.newsList}>
        {DUMMY_NEWS.map((newsItem) => (
          <li key={newsItem.id} className={styles.newsItem}>
            <Link href={`/news/${newsItem.slug}`}>
              <div className={styles.imageWrapper}>
                <Image
                  src={newsItem.image}
                  alt={newsItem.title}
                  width={300} // Set appropriate width
                  height={200} // Set appropriate height
                  objectFit="cover"
                />
              </div>
              <span>{newsItem.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default News;
