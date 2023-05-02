import { useState } from "react";

import union from "../../assets/icons/union.svg";
import nextId from "react-id-generator";

import styles from "./addForm.module.scss";

function AddForm({ todo, setTodo }) {
  const [value, setValue] = useState("");

  function onAddTodo(value) {
    setTodo([
      {
        id: nextId(),
        title: value,
      },
      ...todo,
    ]);
    setValue("");
  }

  return (
    <>
      <input className={styles.input} placeholder="Поиск" />
      <div className={styles.content}>
        <input
          className={styles.input}
          placeholder="Введите текст"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onAddTodo(value)}
        />
        <button onClick={() => onAddTodo(value)} className={styles.button}>
          Добавить <img className={styles.union} src={union} />
        </button>
      </div>
    </>
  );
}

export default AddForm;
