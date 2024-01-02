import React from "react";

const MealMenu = ({ meals, onMealClick }) => {
  const sliceMeals = meals.slice(0, 9);
  return (
    <div>
      {sliceMeals && sliceMeals.length > 0 ? (
        sliceMeals.map((meal) => (
          <div key={meal.idMeal} onClick={() => onMealClick(meal)}>
            <h3>{meal.strMeal}</h3>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
          </div>
        ))
      ) : (
        <p>No meals found</p>
      )}
    </div>
  );
};

export default MealMenu;
