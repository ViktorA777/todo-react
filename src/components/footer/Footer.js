import styles from "./footer.module.scss";

function Footer() {
  return (
    <div>
      <footer className={styles.wrapper}>
        <div className={styles.container}>
          <div>
            <span>© 2021 Justice-team. All rights reserved.</span>
          </div>
          <div className={styles.right}>
            <span>Terms & conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
