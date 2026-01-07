import { fetchRecipes } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";

// statik bir sayfayı tamamen dinamik hale getirme
// export const dynamic = "force-dynamic";

// statik sayfa içieriğini belirli aralıklara tekrar oluşturulmasını ve verilerin tazelenmesini sağalama
export const revalidate = 60;

const Page = async () => {
  const data = await fetchRecipes();

  return (
    <div className="border border-blue-500 p-10">
      <h1>Tarifler - Server</h1>

      {data.recipes.map((recipe) => (
        <Link href={`/recipes-server/${recipe.id}`} key={recipe.id} className="flex gap-5 mt-5 p-5 rounded-md border">
          <Image src={recipe.image} alt={recipe.name} width={130} height={130} />

          <div>
            <h1>{recipe.name}</h1>
            <h3>{recipe.cuisine}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Page;
