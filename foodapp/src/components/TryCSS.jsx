import styles from "./tryCSS.module.css";
export default function TryCSS() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <div className={styles.box}>I am the Child</div>
        <div className={styles.box}>I am the Child</div>
      </div>
    </div>
  );
}
