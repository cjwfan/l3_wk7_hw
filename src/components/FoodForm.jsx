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
          Food Name:
          <input
            type="text"
            value={foodName}
            onChange={(event) => setFoodName(event.target.value)}
          />
        </label>
        <label>
          Brand:
          <input
            type="text"
            value={brand}
            onChange={(event) => setBrand(event.target.value)}
          />
        </label>
        <label>
          Food Type:
          <input
            type="text"
            value={foodType}
            onChange={(event) => setFoodType(event.target.value)}
          />
        </label>
        <label>
          Status:
          <input
            type="text"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          />
        </label>
        <label>
          Notes:
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
