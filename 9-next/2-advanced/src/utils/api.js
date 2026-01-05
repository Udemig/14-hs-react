// api isteğini atan fonksiyon
export const fetchRecipes = async () => {
  const res = await fetch("https://dummyjson.com/recipes");
  return res.json();
};
