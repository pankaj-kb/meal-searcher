import { useBookmarkContext } from "./BookmarkContext";
import { FaBookmark } from "react-icons/fa";

const Bookmarks = ({ onMealClick }) => {
  const { bookmarks, removeBookmark } = useBookmarkContext();
  return (
    <div className="mealGallary">
      {bookmarks && bookmarks.length > 0 ? (
        bookmarks.map((meal) => (
          <div className="mealTile" key={meal.idMeal}>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              onClick={() => onMealClick(meal)}
            />
            <h3>{meal.strMeal}</h3>
            <FaBookmark className=".bookmark-icon" onClick={() => {removeBookmark(meal)}} />
          </div>
        ))
      ) : (
        <p>Nothing in Bookmarks. Kindly add some to view here.</p>
      )}
    </div>
  );
};

export default Bookmarks;
