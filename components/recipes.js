import useSWR from "swr";

export default function Recipes() {
  const { data: recipes, error, isLoading } = useSWR("api/recipes");

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      {recipes.map((recipe) => (
        <>
          <h1 key={recipe._id}>{recipe.title}</h1>
          <small>Portions: {recipe.portions}</small>
          <small>Duration: {recipe.duration} min</small>
          <h2>Ingredients:</h2>
          <p> {recipe.ingredients} </p>
          <h2>Instructions: </h2>
          <p>{recipe.instructions}</p>
        </>
      ))}
    </div>
  );
}
