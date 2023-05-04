import { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

import AddForm from "../addForm/AddForm";
import ItemList from "../itemList/ItemList";

import styles from "../../assets/styles/style.module.scss";

function TodoList() {
  const [todo, setTodo] = useLocalStorage([
   { id: 1, title: "Выбрать хостинг для сайта" },
   { id: 2, title: "Записаться к стоматологу" },
   { id: 3, title: "Записаться на курсы по Английскому" },
   { id: 4, title: "Навести порядок на кухне" },
   { id: 5, title: "Подготовить одежду к поездке" },
   { id: 6, title: "Подготовиться к выступлению в понедельник" },
   { id: 7, title: "Помыть машину" },
   { id: 8, title: "Купить продукты" },
   { id: 9, title: "Купить продукты" },
 ], 'state')

  const [string, setString] = useState("");

  const stringValue = (string) => {
    setString(string);
  };

  return (
    <>
      <div>
        <h3 className={styles.h3}>Список</h3>
      </div>
      <div className={styles.container}>
        <AddForm todo={todo} setTodo={setTodo} onChange={stringValue} />
      </div>
      <ItemList todo={todo} setTodo={setTodo} string={string} />
    </>
  );
}

export default TodoList;
