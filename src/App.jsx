import { useEffect, useState } from "react";
import "./App.css";
import MealMenu from "./components/MealMenu";
import MealInfo from "./components/MealInfo";
import Bookmarks from "./components/Bookmarks";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");

  const [result, setResult] = useState([]);

  const [selectedMeal, setSelectedMeal] = useState(null);

  const [bookmarks, setBookmarks] = useState([]);

  const [bookmarkMenuClick, setBookmarkMenuClick] = useState(false);

  useEffect(() => {
    const searchMeal = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}&limit=5`
        );
        setResult(response.data.meals);
      } catch (error) {
        console.error("Error while fetching data: ", error);
      }
    };

    const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    if (storedBookmarks) {
      setBookmarks(storedBookmarks);
    }

    setSelectedMeal(null);
    searchMeal();
    setBookmarkMenuClick(false)
  }, [query]);

  // approach with buttton click
  // const searchMeal = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  //     );
  //     setResult(response.data.meals);
  //   } catch (error) {
  //     console.error("Error while fetching data: ", error);
  //   }
  //   setSelectedMeal(null);
  // };

  const handleMealClick = (meal) => {
    console.log(meal);
    setSelectedMeal(meal);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleBookmark = (meal) => {
    console.log(meal);
    const newBookmarks = [...bookmarks, meal];
    setBookmarks(newBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
  };

  // TODO: style the app.
  return (
    <div>
      <nav onClick={handleRefresh}>
        <img src="/mealLogo.png" alt="logo" />
        <h1>Meal Searcher</h1>
      </nav>
      <div className="searchBar">
        <input
          type="text"
          placeholder="find your meal"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* <button onClick={searchMeal}>Search Meal</button> */}
        <button className="bookMarks" onClick={() => setBookmarkMenuClick(true)}>
          Bookmarks
        </button>
      </div>

      {/* bookmarks */}

      <div>
        {bookmarkMenuClick ? (
          <div>
            <button onClick={() => setBookmarkMenuClick(false)}>Close Bookmarks</button>
            <Bookmarks meals={bookmarks} onMealClick={handleMealClick} />
          </div>
        ) : (
          <div>
            {selectedMeal ? (
              <div>
                <button onClick={() => setSelectedMeal(null)}>Close</button>
                <MealInfo selectedMeal={selectedMeal} />
              </div>
            ) : (
              <div>
                <MealMenu
                  meals={result}
                  onMealClick={handleMealClick}
                  onHandleBookmark={handleBookmark}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
