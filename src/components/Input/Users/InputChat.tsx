interface INewText {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  clickHandler: () => void;
}

import styles from "./inputchat.module.css";
const InputChat = ({ value, onChange, clickHandler }: INewText) => {
  return (
    <div className={styles.input}>
      <input
        type="text"
        placeholder="Write something"
        onChange={onChange}
        value={value}
      />

      <button onClick={clickHandler}>Enter</button>
    </div>
  );
};

export default InputChat;
