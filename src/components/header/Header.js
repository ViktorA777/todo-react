import { NavLink } from "react-router-dom";

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
                <NavLink
                  to="/main"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#4448da" : "",
                    };
                  }}
                >
                  Главная
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/list"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#4448da" : "",
                    };
                  }}
                >
                  Список
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/friends"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#4448da" : "",
                    };
                  }}
                >
                  Друзья
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contacts"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#4448da" : "",
                    };
                  }}
                >
                  Контакты
                </NavLink>
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
