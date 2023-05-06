import ButtonSave from "../buttons/ButtonSave";
import ButtonDelete from "../buttons/ButtonDelete";
import ButtonEdit from "../buttons/ButtonEdit";

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
      {editTodo === id ? (
        <div>
          <input
            className={styles.input}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoFocus={true}
            onKeyDown={(e) => e.key === "Enter" && onSaveTodo(todo.id)}
          />
          <ButtonSave onSaveTodo={() => onSaveTodo(todo.id)} todo={todo} />
        </div>
      ) : (
        <div className={styles.text}>{title}</div>
      )}
      <div className={styles.img}>
        <ButtonDelete onDeleteTodo={onDeleteTodo} todo={todo} />
        <ButtonEdit onEditTodo={onEditTodo} todo={todo} />
      </div>
    </div>
  );
}

export default Item;
