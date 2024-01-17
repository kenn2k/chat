import styles from "./mainbar.module.css";
function MainBar() {
  return (
    <div className={styles.mainBar}>
      <div className={styles.wrapper}>
        <h1>Hey!</h1>
        <h2>Chose Ur Chat</h2>
      </div>
    </div>
  );
}

export default MainBar;
