import { NavLink } from "react-router-dom";

import styles from "../header/header.module.scss";

const navbar = [
  { title: "Главная", to: "/main" },
  { title: "Список", to: "/list" },
  { title: "Друзья", to: "/friends" },
  { title: "Контакты", to: "/contacts" },
];

function NavBar() {
  const navlink = navbar.map((link) => {
    return (
      <li>
        <NavLink
          to={link.to}
          style={({ isActive }) => {
            return {
              color: isActive ? "#4448da" : "",
            };
          }}
        >
          {link.title}
        </NavLink>
      </li>
    );
  });

  return <ul className={styles.list}>{navlink}</ul>;
}

export default NavBar;
