import FoodForm from "../components/FoodForm";

export default function Home({
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
    <main>
      <h1>Cat Food Tracker</h1>
      <p>
        Track foods my cat liked, disliked, or still needs to try. When the food
        has been added, the form will clear. Click the 'View Foods' link in the
        navigation menu to view all saved foods.
      </p>

      <FoodForm
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
    </main>
  );
}
