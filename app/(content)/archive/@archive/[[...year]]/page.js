import { getAvailableNewsYears, getNewsForYear } from "@/libs/news";
import styles from "../../archive.module.css";
import Link from "next/link";
import NewsList from "@/components/news-list";

export default function FilteredNewsListPage({ params }) {
  const filter = params.year;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;
  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
  }

  let newsContent = <p>no avalaible news</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  const links = getAvailableNewsYears();
  return (
    <>
      <header className={styles.archiveNavbar}>
        <nav>
          <ul className={styles.archiveNavList}>
            {links.map((link, i) => (
              <li key={i} className={styles.archiveNavItem}>
                <Link
                  href={`/archive/${link}`}
                  className={styles.archiveNavLink}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
