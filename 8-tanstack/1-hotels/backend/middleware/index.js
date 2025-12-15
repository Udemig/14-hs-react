const { getData } = require("../utils/getData");

const data = getData();

exports.controlId = (req, res, next) => {
  // id'si bilenen tarifi bul
  const recipe = data.find((i) => i.id == req.params.id);

  // tarif dizide bulunamazsa hata gönder
  if (!recipe) {
    return next(res.status(404).json({ message: "Aradığınız id'li eleman bulunamadı" }));
  }

  // tarifi bilgilerinin middleware'den bir sonraki adımda
  // erişilebilir olması için req'in iççerisnde veriyi ekle
  req.recipe = recipe;

  // bulunursa bir sonraki adıma geç
  next();
};
