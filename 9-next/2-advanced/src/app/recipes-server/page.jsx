import { fetchRecipes } from "@/utils/api";
import Image from "next/image";

const Page = async () => {
  const data = await fetchRecipes();

  return (
    <div className="border border-blue-500 p-10">
      <h1>Tarifler - Server</h1>

      {data.recipes.map((recipe) => (
        <div key={recipe.id} className="flex gap-5 mt-5 p-5 rounded-md border">
          <Image src={recipe.image} alt={recipe.name} width={130} height={130} />

          <div>
            <h1>{recipe.name}</h1>
            <h3>{recipe.cuisine}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
