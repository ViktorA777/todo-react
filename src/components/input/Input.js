import styles from "./input.module.scss";

function Input({ text }) {
  return (
    <div>
      <input className={styles.input} type="text" placeholder={text} />
    </div>
  );
}

export default Input;
