// MealInfo.jsx
import React from "react";

const MealInfo = ({ meals }) => {
  return (
    <div>
      {meals && meals.length > 0 ? (
        meals.map((meal) => (
          <div key={meal.idMeal}>
            <h3>{meal.strMeal}</h3>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            {/* Display additional meal information here if needed */}
          </div>
        ))
      ) : (
        <p>No meals found</p>
      )}
    </div>
  );
};

export default MealInfo;
