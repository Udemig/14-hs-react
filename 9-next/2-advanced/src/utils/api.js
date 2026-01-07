// api isteğini atan fonksiyon
export const fetchRecipes = async () => {
  const res = await fetch("https://dummyjson.com/recipes", {
    // cache: "no-store",
  });

  return res.json();
};

// api isteğini atan fonksiyon
export const fetchRecipesById = async (id) => {
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);

  return res.json();
};
