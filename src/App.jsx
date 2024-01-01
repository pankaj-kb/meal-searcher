import { useState } from "react";
import "./App.css";
import MealInfo from "./components/MealInfo";
import MealMenu from "./components/MealMenu";
function App() {
  const [mealQuery, setMealQuery] = useState("");

  const [searchMeal, setSearchMeal] = useState("");

  const triggerSearchMeal = () => {
    setSearchMeal(mealQuery);
  };

  return (
    <>
      <div className="searchBox">
        <input
          type="search"
          placeholder="apple pie"
          value={mealQuery}
          onChange={(e) => setMealQuery(e.target.value)}
        />
        <button onClick={triggerSearchMeal}>Search</button>
      </div>

      <div className="container">
        {/* <MealInfo info="apple pie" /> */}
        <MealMenu mealName={searchMeal} />
      </div>
    </>
  );
}

export default App;
