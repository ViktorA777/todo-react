import { ReactComponent as ReactLogoUnion } from "../../assets/icons/union.svg";

import styles from "../addForm/addForm.module.scss";

function ButtonAdd({ onAddTodo, value }) {
  return (
    <button onClick={() => onAddTodo(value)} className={styles.button}>
      Добавить <ReactLogoUnion className={styles.union} />
    </button>
  );
}
export default ButtonAdd;
