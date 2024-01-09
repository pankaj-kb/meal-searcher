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
        <p className="ingredients">
          Ingredients:
          {Object.keys(selectedMeal)
            .filter(
              (key) => key.startsWith("strIngredient") && selectedMeal[key]
            )
            .map((key, index) => (
              <span key={index}>
                {selectedMeal[key]}
                {index <
                Object.keys(selectedMeal).filter(
                  (key) => key.startsWith("strIngredient") && selectedMeal[key]
                ).length -
                  1
                  ? ", "
                  : ""}
              </span>
            ))}
        </p>

        <p className="instructions">Instructions: {selectedMeal.strInstructions}</p>
      </div>
    </div>
  );
};

export default MealInfo;
