import bell from "../../assets/icons/bell.svg";
import profile from "../../assets/icons/profile.svg";

import styles from "./header.module.scss";

function Header() {
  return (
    <div>
      <header>
        <div className={styles.header}>
          <h1 className={styles.logo}>JUSTICE</h1>
          <div className={styles.menu}>
            <ul className={styles.list}>
              <li>
                <a href="">Главная</a>
              </li>
              <li>
                <a href="">Список</a>
              </li>
              <li>
                <a href="">Друзья</a>
              </li>
              <li>
                <a href="">Контакты</a>
              </li>
            </ul>
          </div>
          <div className={styles.icons}>
            <div className={styles.content}>
              <button className={styles.button}>Выйти</button>
            </div>
            <img src={bell} />
            <img src={profile} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
