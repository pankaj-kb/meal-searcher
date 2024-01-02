import React from "react";

const MealMenu = ({ meals, onMealClick }) => {
  // const sliceMeals = meals.slice(0, 9);
  return (
    <div className="mealGallary">
      {meals && meals.length > 0 ? (
        meals.slice(0, 9).map((meal) => (
          <div className="mealTile" key={meal.idMeal} onClick={() => onMealClick(meal)}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h3>{meal.strMeal}</h3>
          </div>
        ))
      ) : (
        <p>No meals found</p>
      )}
    </div>
  );
};

export default MealMenu;
