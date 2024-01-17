import SideBar from "../../Home/SideBar";
import UserBar from "./UserBar";
import styles from "./userpage.module.css";
const UserPage = () => {
  return (
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <SideBar />
        <UserBar />
      </div>
    </div>
  );
};

export default UserPage;
