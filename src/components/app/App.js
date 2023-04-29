import Header from "../header/Header";
import Footer from "../footer/Footer";
import Input from "../input/Input";
import Item from "../item/Item";
import union from "../../assets/icons/union.svg";

import styles from "../../assets/styles/style.module.scss";

function App() {
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
      <Item text="Выбрать хостинг для сайта" />
      <Item text="Записаться к стоматологу" />
      <Item text="Записаться на курсы по Английскому" />
      <Item text="Навести порядок на кухне" />
      <Item text="Подготовить одежду к поездке" />
      <Item text="Подготовиться к выступлению в понедельник" />
      <Item text="Помыть машину" />
      <Item text="Купить продукты" />
      <Item text="Отдать проект на проверку" />
      <Footer />
    </div>
  );
}

export default App;
