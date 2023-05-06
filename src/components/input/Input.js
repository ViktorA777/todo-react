import styles from "./input.module.scss";

function Input({ text }) {
  return <input className={styles.input} type="text" placeholder={text} />;
}

export default Input;
