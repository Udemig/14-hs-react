const { getData } = require("../utils/getData");
const { setData } = require("../utils/setData");
const crypto = require("crypto");

// json sosyasından verileri alıyoruz
let data = getData();

exports.getAllRecipes = (req, res) => {
  // tariflerin bir kopyasını oluşturyoruz
  let places = [...data];

  // aratılan terime eriş
  const searchTerm = req.query?.title?.trim()?.toLowerCase();
  const location = req.query?.location?.trim()?.toLowerCase();

  // sırlama parametresine eriş
  const order = req.query.order;

  console.log("param", req.query);

  // eğerki artılan terim varsa filtrele
  if (searchTerm) {
    places = data.filter((recipe) => recipe.name.toLowerCase().includes(searchTerm));
  }

  if (location) {
    places = places.filter((recipe) => recipe.location.toLowerCase().includes(location));
  }

  // eğerki order varsa sırala
  if (order) {
    places.sort((a, b) =>
      order === "rating-asc"
        ? a.rating - b.rating
        : order === "rating-desc"
        ? b.rating - a.rating
        : order === "price-asc"
        ? a.price_per_night - b.price_per_night
        : b.price_per_night - a.price_per_night
    );
  }

  // cevap gönder
  res.status(200).json({
    message: "Konaklama Noktaları başarıyla gönderildi",
    results: places.length,
    places: places,
  });
};

exports.createRecipe = (req, res) => {
  //1) isteğin body'si ile gelen veriye eriş
  const newRecipe = req.body;

  //2) verinin bütün değerleri tanımlanmışmı kontrol et
  if (
    !newRecipe.name ||
    !newRecipe.location ||
    !newRecipe.address ||
    !newRecipe.description ||
    !newRecipe.amenities ||
    !newRecipe.rating ||
    !newRecipe.price_per_night
  ) {
    return res.status(400).json({ message: "Lütfen bütün değerli tanımlayın" });
  }

  //! string olarak gelen özellikleri diziye çevir
  newRecipe.amenities = newRecipe.amenities.split(",");

  //3) veriye id ekle
  newRecipe.id = crypto.randomUUID();

  // 10 - 99 arasında rastgele sayı üret
  const i = Math.floor(Math.random() * 89 + 10);

  newRecipe.image_url = `https://picsum.photos/4${i}/4${i}`;

  //4) yeni tarifi diziyi ekle
  data.push(newRecipe);

  //5) yeni diziyi json dosyasına yaz
  setData(data);

  //6) cevap gönder
  res.status(200).json({
    message: "Yeni konaklama noktası oluşturuldu",
    place: newRecipe,
  });
};

exports.getRecipe = (req, res) => {
  // cevap gönderdik
  res.status(200).json({
    message: "Aradığınız veri bulundu",
    place: req.recipe,
  });
};

exports.deleteRecipe = (req, res) => {
  // silinecek elemanın sırasını bul
  const index = data.findIndex((i) => i.id == req.params.id);

  // sırası bilenen elemanı diziden kaldır
  data.splice(index, 1);

  // json dosyasını güncelle
  setData(data);

  // cevap gönder
  res.status(204).json({ message: "Başarıyla Silindi" });
};
