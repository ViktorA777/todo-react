import { useState } from "react";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import Input from "../input/Input";
import ItemList from "../itemList/ItemList";
import union from "../../assets/icons/union.svg";

import styles from "../../assets/styles/style.module.scss";

function App() {
  const [todo, setTodo] = useState([
    { id: 1, title: "Выбрать хостинг для сайта" },
    { id: 2, title: "Записаться к стоматологу" },
    { id: 3, title: "Записаться на курсы по Английскому" },
    { id: 4, title: "Навести порядок на кухне" },
    { id: 5, title: "Подготовить одежду к поездке" },
    { id: 6, title: "Подготовиться к выступлению в понедельник" },
    { id: 7, title: "Помыть машину" },
    { id: 8, title: "Купить продукты" },
    { id: 9, title: "Купить продукты" },
  ]);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <Input text="Поиск" />
        <div className={styles.content}>
          <Input text="Введите текст" />
          <button className={styles.button}>
            Добавить <img className={styles.union} src={union} />
          </button>
        </div>
      </div>
      <ItemList todo={todo} setTodo={setTodo} />
      <Footer />
    </div>
  );
}

export default App;
