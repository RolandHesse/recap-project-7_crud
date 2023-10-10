import { useRouter } from "next/router";
import useSWR from "swr";

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data: recipe, isLoading } = useSWR(`api/recipes/${id}`);

  if (!recipe || isLoading) {
    return <h1>Loading...</h1>;
  }

  const { title, portions, ingredients, instructions, duration } = recipe;

  return (
    <>
      <h1>{title}</h1>
      <small>Portions: {portions}</small>
      <small>Duration: {duration} min</small>
      <h2>Ingredients:</h2>
      <p> {ingredients} </p>
      <h2>Instructions: </h2>
      <p>{instructions}</p>
    </>
  );
}
