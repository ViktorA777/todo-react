import { ReactComponent as ReactLogoEdit } from "../../assets/icons/edit.svg";

import styles from "../item/item.module.scss";

function ButtonEdit({ onEditTodo, todo }) {
  return (
    <button onClick={() => onEditTodo(todo.id)} className={styles.background}>
      <ReactLogoEdit />
    </button>
  );
}

export default ButtonEdit;
