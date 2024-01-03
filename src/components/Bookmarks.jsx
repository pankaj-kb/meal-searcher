const Bookmarks = ({meals, onMealClick}) => {
  return (
    <div className="mealGallary">
      {meals && meals.length > 0 ? (
        meals.map((meal) => (
          <div className="mealTile" key={meal.idMeal}>
            <img
              onClick={() => onMealClick(meal)}
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />
            <h3>{meal.strMeal}</h3>
            {/* <button onClick={() => onHandleBookmark(meal)}>Bookmark</button> */}
          </div>
        ))
      ) : (
        <p>Nothing in Bookmarks kindly add some to view here</p>
      )}
    </div>
  );
};

export default Bookmarks;
