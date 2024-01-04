import React from "react";
import { useBookmarkContext } from "./BookmarkContext";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

const MealMenu = ({ meals, onMealClick }) => {
  const { addBookmark, removeBookmark, bookmarkExist } = useBookmarkContext();

  // const checkExist = (meal) => console.log(bookmarkExist(meal));

  // const sliceMeals = meals.slice(0, 9);

  return (
    <div className="mealGallary">
      {meals && meals.length > 0 ? (
        meals.slice(0, 15).map((meal) => (
          <div className="mealTile" key={meal.idMeal}>
            <img
              onClick={() => onMealClick(meal)}
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />
            <h3>{meal.strMeal}</h3>
            {bookmarkExist(meal) ? (
              <button onClick={() => removeBookmark(meal)}>
                <FaBookmark />
              </button>
            ) : (
              <button onClick={() => addBookmark(meal)}>
                <FaRegBookmark />
              </button>
            )}
          </div>
        ))
      ) : (
        <p>No meals found</p>
      )}
    </div>
  );
};

export default MealMenu;
