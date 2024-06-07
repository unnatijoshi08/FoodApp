import styles from "./foodItem.module.css";
export default function FoodItem({ food }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} alt="Food Image" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainerDiv}>
        {" "}
        <button className={styles.itemButton}>View Recipe</button>
      </div>
    </div>
  );
}
