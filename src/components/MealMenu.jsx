import React from "react";

const MealMenu = ({ meals, onMealClick, onHandleBookmark }) => {
  // const sliceMeals = meals.slice(0, 9);
  return (
    <div className="mealGallary">
      {meals && meals.length > 0 ? (
        meals.slice(0, 15).map((meal) => (
          <div className="mealTile" key={meal.idMeal}>
            <img onClick={() => onMealClick(meal)} src={meal.strMealThumb} alt={meal.strMeal} />
            <h3>{meal.strMeal}</h3>
            <button onClick={() => onHandleBookmark(meal)}>Bookmark</button>
          </div>
        ))
      ) : (
        <p>No meals found</p>
      )}
    </div>
  );
};

export default MealMenu;
