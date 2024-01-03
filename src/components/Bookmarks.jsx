import { useBookmarkContext } from "./BookmarkContext";

const Bookmarks = ({ meals, onMealClick, onHandleBookmark }) => {
  const { bookmarks, addBookmark, removeBookmark } = useBookmarkContext();
  return (
    <div className="mealGallary">
      {meals && meals.length > 0 ? (
        meals.map((meal) => (
          <div className="mealTile" key={meal.idMeal}>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              onClick={() => onMealClick(meal)}
            />
            <h3>{meal.strMeal}</h3>
            <button
              key={`remove-${meal.idMeal}`}
              onClick={() => {
                const confirmRemoval = window.confirm(
                  `Are you sure you want to remove ${meal.strMeal} from bookmarks?`
                );
                if (confirmRemoval) {
                  onHandleBookmark(meal);
                }
              }}
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p>Nothing in Bookmarks. Kindly add some to view here.</p>
      )}
    </div>
  );
};

export default Bookmarks;
