import styles from "./styles/index.module.scss";

function index() {
  return (
    <div className={styles.page}>
      {/* 공통 헤더 UI 부분 */}
      {/* 공통 네비게이션 UI 부분 */}
      <div className={styles.page__contents}>
        <div className={styles.page__contents__introBox}>
          <div className={styles.wrapper}>
            <span className={styles.wrapper__title}> 주제 </span>
            <span className={styles.wrapper__desc}>
              자료 출처. <br />
              모든 지원을 받습니다.
            </span>
            {/** 검색창 UI 부분 */}
          </div>
        </div>
        <div className={styles.page__contents__imageBox}></div>
      </div>
      {/* 공통 푸터 UI 부분 */}
    </div>
  );
}
export default index;
