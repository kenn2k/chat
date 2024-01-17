import { Link } from "react-router-dom";
import { IUser } from "./Users";
import styles from "./useritem.module.css";
const UsersItem = ({ nick, image }: IUser) => {
  return (
    <li>
      <div className={styles.link}>
        <Link to="/user">
          <div className={styles.block}>
            <img src={image} alt="" />
            {nick}
          </div>
        </Link>
      </div>
    </li>
  );
};

export default UsersItem;
