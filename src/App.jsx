import { useEffect, useState } from "react";
import "./App.css";
import MealMenu from "./components/MealMenu";
import MealInfo from "./components/MealInfo"
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");

  const [result, setResult] = useState([]);

  const [selectedMeal, setSelectedMeal] = useState(null);

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
      </div>

      {/* section for Meal menu */}

      <div>
        {selectedMeal ? (
          <div>
            <button onClick={() => setSelectedMeal(null)}>Close</button>
            <MealInfo selectedMeal={selectedMeal} />
          </div>
        ) : (
          <div>
            <MealMenu meals={result} onMealClick={handleMealClick} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
