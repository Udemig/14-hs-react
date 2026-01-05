"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchRecipes = () => {
    setIsLoading(true);

    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setData(data.recipes))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  if (isLoading) return <div>Loading</div>;

  if (error)
    return (
      <div>
        <span>Hata: {error}</span>
        <button onClick={fetchRecipes}>Tekrar Dene</button>
      </div>
    );

  return (
    <div className="border border-red-500 p-10">
      <h1>Tarifler - Client</h1>

      {data.map((recipe) => (
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
