import trash from "../../assets/icons/trash.svg";
import edit from "../../assets/icons/edit.svg";
import styles from "./item.module.scss";

function Item({ text }) {
  return (
    <div className={styles.container}>
      <span className={styles.text}>{text}</span>
      <div className={styles.img}>
        <img src={trash} />
        <img src={edit} />
      </div>
    </div>
  );
}

export default Item;
