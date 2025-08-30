import { useEffect, useState } from "react";

const RecipePicker = () => {
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recipe, setRecipe] = useState(null);

  // componentDidUpdate: state her değiştiğinde fonksiyon çalışır
  useEffect(() => {
    // api isteği atılmadan hemen önce loading state'ini güncelle
    setLoading(true);

    fetch(`https://dummyjson.com/recipes/${index}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [index]);

  if (loading) return <h1>Yükleniyor...</h1>;

  if (error) return <h1>HATA! {error}</h1>;

  return (
    <div>
      <h1>Tarif Seç</h1>

      <div>
        <h2>{recipe.name}</h2>

        <img src={recipe.image} width={300} />
        <h3>Mutfak: {recipe.cuisine}</h3>
        <h3>Zorluk: {recipe.difficulty}</h3>
        <h3>Süre: {recipe.prepTimeMinutes}</h3>
        <h3>Rating: {recipe.rating}</h3>
      </div>

      <div>
        <button disabled={index === 1 || loading} onClick={() => setIndex(index - 1)}>
          Önceki
        </button>

        <h1>{index}</h1>

        <button disabled={index === 50 || loading} onClick={() => setIndex(index + 1)}>
          Sonraki
        </button>
      </div>
    </div>
  );
};

export default RecipePicker;
