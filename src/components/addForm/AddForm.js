import { useState } from "react";

import ButtonAdd from "../buttons/ButtonAdd";

import nextId from "react-id-generator";

import styles from "./addForm.module.scss";

function AddForm({ todo, setTodo, onChange }) {
  const [value, setValue] = useState("");

  const stringValue = (e) => {
    onChange(e.target.value);
  };

  function onAddTodo(value) {
    if (value == "") return;
    else {
      setTodo([
        {
          id: nextId(),
          title: value,
        },
        ...todo,
      ]);
      setValue("");
    }
  }

  return (
    <>
      <input
        className={styles.input}
        placeholder="Поиск"
        onChange={stringValue}
      />
      <div className={styles.content}>
        <input
          className={styles.input}
          placeholder="Введите текст"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onAddTodo(value)}
        />
        <ButtonAdd onAddTodo={() => onAddTodo(value)} value={value} />
      </div>
    </>
  );
}

export default AddForm;
