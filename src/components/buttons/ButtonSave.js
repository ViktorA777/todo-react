import styles from "../item/item.module.scss";

function ButtonSave({ onSaveTodo, todo }) {
  return (
    <button onClick={() => onSaveTodo(todo.id)} className={styles.button}>
      Сохранить
    </button>
  );
}

export default ButtonSave;
