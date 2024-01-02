import React from "react";

const MealMenu = ({ meals, onMealClick }) => {
  return (
    <div>
      {meals && meals.length > 0 ? (
        meals.map((meal) => (
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
