import styles from "./CommonHeader.module.scss";
function CommonHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.header__logBox}>
        <img src="" alt="" />
        <span className={styles.header__logoBox__title}>PhotoSplash</span>
      </div>
    </div>
  );
}

export default CommonHeader;
