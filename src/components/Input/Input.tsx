import { IUser } from "./Users/Users";
import styles from "./input.module.css";
const Input = ({ onChangeInput, value }) => {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeInput(event.target.value);
  };
  return (
    <form>
      <div className={styles.input}>
        <input
          type="text"
          onChange={changeHandler}
          placeholder="Find  your friends"
          value={value}
        />
      </div>
    </form>
  );
};

export default Input;
