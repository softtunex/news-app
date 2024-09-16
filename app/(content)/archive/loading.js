import styles from "./archive.module.css"; // Import CSS module for styling

const ArchiveLoading = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
      <p> Loading...</p>
    </div>
  );
};

export default ArchiveLoading;
