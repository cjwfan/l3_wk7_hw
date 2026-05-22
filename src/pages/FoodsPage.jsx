import FoodList from "../components/FoodList";

export default function FoodsPage({ catFoods }) {
  return (
    <main>
      <h1>Saved Cat Foods</h1>
      <FoodList catFoods={catFoods} />
    </main>
  );
}
