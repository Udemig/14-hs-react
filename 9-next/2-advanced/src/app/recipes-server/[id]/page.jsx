import { fetchRecipes, fetchRecipesById } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";

// Bu dinamik sayfanın bazı versiyonlarını statik hale getirelim
// Bu fonksiyondan return edilen parametre dizisindeki her bir eleman için statik bir sayfa oluşur
export const generateStaticParams = async () => {
  // tarif verilini çek
  const data = await fetchRecipes();

  // bütün tarif id'lerini döndür (hepsini statik yapar)
  return data.recipes.map((recipe) => ({ id: String(recipe.id) }));
};

const Page = async ({ params }) => {
  const { id } = await params;
  const data = await fetchRecipesById(id);

  return (
    <div className="flex flex-col items-center justify-center gap-20">
      <Link href="/recipes-server">Geri</Link>

      <Image src={data.image} alt={data.name} width={300} height={300} className="rounded-lg" />

      <h1>{data.name}</h1>

      <p>Mutfak: {data.cuisine}</p>

      <p>Zorluk: {data.difficulty}</p>
    </div>
  );
};

export default Page;
