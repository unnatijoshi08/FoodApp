import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import styles from "./fooddetails.module.css";

export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "6cb8a2e873e54d0fa5aae83643e8a0ae";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>
              🕛
              {food.readyInMinutes} Min
            </strong>
          </span>
          <span>
            <strong>
              {food.vegeterian ? "Vegeterian🥦" : "Non-Vegeterian🍗"}
            </strong>
          </span>
          <span>
            <strong>Serves {food.servings}</strong>
          </span>
          <span>
            <strong>{food.vegan ? "Vegan " : ""}</strong>
          </span>
        </div>
        <div>
          $
          <span>
            <strong>{food.pricePerServing / 100} Per Serving</strong>
          </span>
        </div>
        <h2>Ingredients</h2>
        <ItemList food={food} isLoading={isLoading} />
        <h2>Instructions</h2>
        <div className={styles.instructions}>
          <ol className={styles.instructionsol}>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li className={styles.instructionsli} key={step.number}>
                  {step.step}
                </li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
