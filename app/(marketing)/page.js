"use client";
import styles from "./page.module.css";
import { useRouter } from "next/navigation"; // Import router from next/navigation

export default function Home() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/news"); // Redirects to news page
  };

  return (
    <main className={styles.main}>
      <div className={styles.hero}>Welcome to Our News Portal</div>

      <div className={styles.content}>
        <p>
          Stay informed with the latest updates and stories from around the
          world. Our portal covers breaking news, insightful analyses, and
          stories that matter.
        </p>
        <p>
          Whether you're interested in politics, technology, or entertainment,
          we've got you covered. Get the latest insights, in-depth articles, and
          exclusive interviews right at your fingertips.
        </p>
      </div>

      <button className={styles.redirectButton} onClick={handleRedirect}>
        Go to Latest News
      </button>
    </main>
  );
}
