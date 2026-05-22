import React from "react";

export default function FoodList({ catFoods }) {
  return (
    <>
      <div className="food-list">
        {catFoods.map((oneFood) => (
          <div className="food-entry" key={oneFood.id}>
            <p>{oneFood.food_name}</p>
            <p>{oneFood.brand}</p>
            <p>{oneFood.status}</p>
            <p>{oneFood.notes}</p>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}
