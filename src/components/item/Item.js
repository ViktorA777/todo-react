import trash from "../../assets/icons/trash.svg";
import edit from "../../assets/icons/edit.svg";
import styles from "./item.module.scss";

function Item({ title, onDeleteTodo, todo }) {
  return (
    <div className={styles.container}>
      <span className={styles.text}>{title}</span>
      <div className={styles.img}>
        <button
          onClick={() => onDeleteTodo(todo.id)}
          className={styles.background}
        >
          <img src={trash} />
        </button>
        <button className={styles.background}>
          <img src={edit} />
        </button>
      </div>
    </div>
  );
}

export default Item;
