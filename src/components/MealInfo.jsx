import React from "react";
// import { useBookmarkContext } from "./BookmarkContext";

const MealInfo = ({ selectedMeal }) => {
  // const { addBookmark, removeBookmark, bookmarkExist } = useBookmarkContext();
  return (
    <div className="mealInfo-page">
      <div className="meal-upper">
        <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} />
        <h1>{selectedMeal.strMeal}</h1>
      </div>
      <div className="meal-description">
      <p>
        Ingredients: {selectedMeal.strIngredient1},{" "}
        {selectedMeal.strIngredient2}
      </p>
      <p>Instructions: {selectedMeal.strInstructions}</p>
      </div>
    </div>
  );
};

export default MealInfo;
