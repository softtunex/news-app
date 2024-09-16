import styles from "./news.module.css"; // Import CSS module for styling

const Loading = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
