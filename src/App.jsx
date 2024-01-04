import { useEffect, useState } from "react";
import "./App.css";
import MealMenu from "./components/MealMenu";
import MealInfo from "./components/MealInfo";
import Bookmarks from "./components/Bookmarks";
import axios from "axios";
import { useBookmarkContext } from "./components/BookmarkContext";
import { FaBookmark } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

function App() {
  const [query, setQuery] = useState("");

  const [result, setResult] = useState([]);

  const [selectedMeal, setSelectedMeal] = useState(null);

  const [bookmarkMenuClick, setBookmarkMenuClick] = useState(false);

  const { bookmarks } = useBookmarkContext();

  const bookmarkCount = bookmarks.length;

  console.log(bookmarkCount);

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

    setSelectedMeal(null);
    setBookmarkMenuClick(false);
    searchMeal();
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

  // TODO: style the app.
  return (
    <div>
      <nav>
        <img src="/mealLogo.png" alt="logo" onClick={handleRefresh} />
        <h1 onClick={handleRefresh}>Meal Searcher</h1>
      </nav>
      <div className="searchBar">
        <input
          type="text"
          placeholder="find your meal"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* <button onClick={searchMeal}>Search Meal</button> */}
        <div className="bookMarks" onClick={() => setBookmarkMenuClick(true)}>
          <FaBookmark className="bookmark-icon" /> <p>{bookmarkCount}</p>
        </div>
      </div>

      {/* bookmarks */}

      <div>
        {bookmarkMenuClick ? (
          <div>
            <button onClick={() => setBookmarkMenuClick(false)}>
              <IoMdCloseCircle />
            </button>
            <Bookmarks meals={bookmarks} onMealClick={handleMealClick} />
          </div>
        ) : (
          <div>
            {selectedMeal ? (
              <div>
                <button onClick={() => setSelectedMeal(null)}>
                  <IoMdCloseCircle />
                </button>
                <MealInfo selectedMeal={selectedMeal} />
              </div>
            ) : (
              <div>
                <MealMenu meals={result} onMealClick={handleMealClick} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
