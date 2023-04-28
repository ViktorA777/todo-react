import Header from "../header/Header";
import Footer from "../footer/Footer";
import Input from "../input/Input";

import styles from "../../assets/styles/style.module.scss";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <Input text="Поиск" />
        <div className={styles.content}>
          <Input text="Введите текст" />
          <button className={styles.button}>Добавить +</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
