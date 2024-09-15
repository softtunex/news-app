import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import styles from "./news-details.module.css"; // Import the CSS module
import { notFound } from "next/navigation";

const NewsDetails = ({ params }) => {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

  return (
    <>
      {newsItem ? (
        <article className={styles.article}>
          <header className={styles.header}>
            <div className={styles.imageWrapper}>
              <Image
                src={newsItem.image}
                alt={newsItem.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h1 className={styles.title}>{newsItem.title}</h1>
            <time className={styles.date} dateTime={newsItem.date}>
              {newsItem.date}
            </time>
          </header>
          <p className={styles.content}>{newsItem.content}</p>
        </article>
      ) : (
        notFound()
      )}
    </>
  );
};

export default NewsDetails;
