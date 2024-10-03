export default function FoodList({ food }) {
  return (
    <div>
      <img src={food.image} alt="" />
      <h1>{food.title}</h1>
      <button>view Recipe</button>
    </div>
  );
}
