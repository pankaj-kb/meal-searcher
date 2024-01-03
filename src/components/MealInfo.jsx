import React from "react";

const MealInfo = ({ selectedMeal }) => {
  return (
    <div>
      <h3>{selectedMeal.strMeal}</h3>
      <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} />
      <p>
        Ingredients: {selectedMeal.strIngredient1},{" "}
        {selectedMeal.strIngredient2}
      </p>
      <p>Instructions: {selectedMeal.strInstructions}</p>
    </div>
  );
};

export default MealInfo;
