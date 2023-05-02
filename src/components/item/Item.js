import trash from "../../assets/icons/trash.svg";
import edit from "../../assets/icons/edit.svg";
import styles from "./item.module.scss";

function Item({
  title,
  onDeleteTodo,
  todo,
  onEditTodo,
  editTodo,
  id,
  value,
  setValue,
  onSaveTodo,
}) {
  return (
    <div className={styles.container}>
      {editTodo == id ? (
        <div>
          <input
            className={styles.input}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoFocus={true}
            onKeyDown={(e) => e.key === "Enter" && onSaveTodo(todo.id)}
          />
          <button onClick={() => onSaveTodo(todo.id)} className={styles.button}>
            Сохранить
          </button>
        </div>
      ) : (
        <div className={styles.text}>{title}</div>
      )}
      <div className={styles.img}>
        <button
          onClick={() => onDeleteTodo(todo.id)}
          className={styles.background}
        >
          <img src={trash} />
        </button>
        <button
          onClick={() => onEditTodo(todo.id)}
          className={styles.background}
        >
          <img src={edit} />
        </button>
      </div>
    </div>
  );
}

export default Item;
