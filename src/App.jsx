import { useEffect, useState } from "react";
import "./App.css";
import MealInfo from "./components/MealInfo";
import MealMenu from "./components/MealMenu";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("apple");

  const [result, setResult] = useState([]);

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
    console.log(result);
    searchMeal();
  }, [query]);

  return (
    <div>
      <h1>Working</h1>
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* <button onClick={searchMeal}>Search Meal</button> */}
      </div>
      <MealInfo meals={result} />
    </div>
  );
}

export default App;
