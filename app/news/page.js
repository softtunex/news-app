import styles from "./news.module.css";
import NewsList from "@/components/news-list";
import { DUMMY_NEWS } from "@/dummy-news";

const News = () => {
  return (
    <>
      <h2 className={styles.pageTitle}>News</h2>
      <ul className={styles.newsList}>
        <NewsList news={DUMMY_NEWS} />
      </ul>
    </>
  );
};

export default News;
