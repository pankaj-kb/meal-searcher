import { useEffect, useState } from "react";
import "./App.css";
import MealMenu from "./components/MealMenu";
import MealInfo from "./components/MealInfo";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");

  const [result, setResult] = useState([]);

  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    const searchMeal = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        setResult(response.data.meals);
      } catch (error) {
        console.error("Error while fetching data: ", error);
      }
    };
    setSelectedMeal(null)
    searchMeal();
  }, [query]);

  const handleMealClick = (meal) => {
    console.log(meal);
    setSelectedMeal(meal);
  };

  return (
    <div>
      <h1>Meal Searcher</h1>
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* <button onClick={searchMeal}>Search Meal</button> */}
      </div>
      <div>
        {selectedMeal ? (
          <MealInfo selectedMeal={selectedMeal} />
        ) : (
          <MealMenu meals={result} onMealClick={handleMealClick} />
        )}
      </div>
    </div>
  );
}

export default App;
