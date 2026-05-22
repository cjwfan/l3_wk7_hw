import { useEffect, useState } from "react";

import "./App.css";
import { supabase } from "./supabase";
import FoodList from "./components/FoodList";
import FoodForm from "./components/FoodForm";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FoodsPage from "./pages/FoodsPage";

function App() {
  const [catFoods, setCatFoods] = useState([]);
  const [foodName, setFoodName] = useState("");
  const [brand, setBrand] = useState("");
  const [foodType, setFoodType] = useState("");
  const [status, setStatus] = useState("");
  const [notes, setNotes] = useState("");

  async function getFoods() {
    const { data } = await supabase.from("cat_foods").select("*");
    console.log(data);
    setCatFoods(data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await supabase.from("cat_foods").insert({
      food_name: foodName,
      brand: brand,
      food_type: foodType,
      status: status,
      notes: notes,
    });
    await getFoods();

    setFoodName("");
    setBrand("");
    setFoodType("");
    setStatus("");
    setNotes("");
  }

  useEffect(() => {
    getFoods();
  }, []);

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/foods">View Foods</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <Home
              foodName={foodName}
              setFoodName={setFoodName}
              brand={brand}
              setBrand={setBrand}
              foodType={foodType}
              setFoodType={setFoodType}
              status={status}
              setStatus={setStatus}
              notes={notes}
              setNotes={setNotes}
              handleSubmit={handleSubmit}
            />
          }
        />

        <Route path="/foods" element={<FoodsPage catFoods={catFoods} />} />
      </Routes>
    </>
  );
}

export default App;
