import { ReactComponent as ReactLogoBell } from "../../assets/icons/bell.svg";
import { ReactComponent as ReactLogoProfile } from "../../assets/icons/profile.svg";

import Navbar from "../navBar/NavBar";

import styles from "./header.module.scss";

function Header() {
  return (
    <>
      <header>
        <div className={styles.header}>
          <h1 className={styles.logo}>JUSTICE</h1>
          <div className={styles.menu}>
            <Navbar />
          </div>
          <div className={styles.icons}>
            <div className={styles.content}>
              <button className={styles.button}>Выйти</button>
            </div>
            <ReactLogoBell />
            <ReactLogoProfile />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
