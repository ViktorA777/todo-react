import { ReactComponent as ReactLogoTrash } from "../../assets/icons/trash.svg";

import styles from "../item/item.module.scss";

function ButtonDelete({ onDeleteTodo, todo }) {
  return (
    <button onClick={() => onDeleteTodo(todo.id)} className={styles.background}>
      <ReactLogoTrash />
    </button>
  );
}

export default ButtonDelete;
