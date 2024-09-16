import { getAllNews } from "@/libs/news";
import styles from "./news.module.css";
import NewsList from "@/components/news-list";
// import { DUMMY_NEWS } from "@/dummy-news";

export default function News() {
  const news = getAllNews();

  return (
    <>
      <h2 className={styles.pageTitle}>News</h2>
      <ul className={styles.newsList}>
        <NewsList news={news} />
      </ul>
    </>
  );
}
