import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import styles from "./sidebar.module.css";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import Users from "../Input/Users/Users";

import { ThemeContext } from "../../providers/ThemeProvider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
function SideBar() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    // Handle the case where context is undefined
    return null; // or render a default value, throw an error, etc.
  }

  const [theme, setTheme] = themeContext;
  const navigate = useNavigate();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const user = JSON.parse(localStorage.getItem("user") ?? "null");

  const logOutHandler = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  return (
    <div className={styles.sideBar}>
      <div className={styles.wrapper}>
        <div className={styles.sideBarContent}>
          <header className={styles.header}>
            <button onClick={changeTheme}>
              {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
            </button>
            <div className={styles.head}>
              <span>{user && <img src={user.photoURL} alt="user" />}</span>
              <span>
                <h3>{user && user.displayName}</h3>
              </span>
              <span>
                <button onClick={logOutHandler}>log out</button>
              </span>
            </div>
          </header>
        </div>
      </div>

      <Users />
    </div>
  );
}

export default SideBar;
