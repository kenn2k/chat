// Импорт необходимых модулей и компонентов
import styles from "./userbar.module.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import InputChat from "./InputChat";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserBar = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const [value, setValue] = useState("");

  const [text, setText] = useState<string[]>([]);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (value.trim() === "") {
      return;
    }
    setText([...text, value]);

    setValue("");
  };

  return (
    <div className={styles.mainBar}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.arrows}>
            <KeyboardArrowLeftIcon onClick={goBack} />
            <KeyboardArrowRightIcon />
          </div>
        </div>
        <div className={styles.messages}>
          <ul className={styles.messageList}>
            {text.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>
        </div>
        <div className={styles.footer}>
          <InputChat
            value={value}
            onChange={changeHandler}
            clickHandler={clickHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default UserBar;
