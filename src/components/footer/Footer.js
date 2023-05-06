import styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <span>© 2021 Justice-team. All rights reserved.</span>
        <div className={styles.right}>
          <span>Terms & conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
