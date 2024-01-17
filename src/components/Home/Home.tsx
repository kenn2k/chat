import MainBar from "./MainBar";
import SideBar from "./SideBar";
import styles from "./home.module.css";
function Home() {
  return (
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <SideBar />
        <MainBar />
      </div>
    </div>
  );
}

export default Home;
