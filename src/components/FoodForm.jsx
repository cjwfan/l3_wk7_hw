import React from "react";

export default function FoodForm({
  foodName,
  setFoodName,
  brand,
  setBrand,
  foodType,
  setFoodType,
  status,
  setStatus,
  notes,
  setNotes,
  handleSubmit,
}) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Food Name (e.g., Chicken in gravy):
          <input
            type="text"
            value={foodName}
            onChange={(event) => setFoodName(event.target.value)}
          />
        </label>
        <label>
          Brand (e.g., Fancy Feast):
          <input
            type="text"
            value={brand}
            onChange={(event) => setBrand(event.target.value)}
          />
        </label>
        <label>
          Food Type (Wet, Dry, or Treat):
          <input
            type="text"
            value={foodType}
            onChange={(event) => setFoodType(event.target.value)}
          />
        </label>
        <label>
          Status (Liked, Disliked, or To-Try):
          <input
            type="text"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          />
        </label>
        <label>
          Notes (Reaction to Food):
          <textarea
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
          />
          <button type="submit">Add Food</button>
        </label>
      </form>
    </>
  );
}
