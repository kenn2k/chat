import { signInWithPopup } from "firebase/auth";
import styles from "./login.module.css";
import { auth, googleAuthProvider } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";

const Login = () => {
  const navigate = useNavigate();
  const signInHandler = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      console.log(result);
      localStorage.setItem("token", result.user.accessToken);
      localStorage.setItem("user", JSON.stringify(result.user));
      navigate("/");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <h1>Sign In To Access Private Messages</h1>
        <GoogleButton onClick={signInHandler}></GoogleButton>
      </div>
    </div>
  );
};

export default Login;
