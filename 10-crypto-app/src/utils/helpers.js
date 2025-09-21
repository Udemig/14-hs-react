// % değeri formatla
export const formatPercentage = (percentage) => {
  // veri gelemediyse n/a döndür
  if (!percentage) return "N/A";

  // sayının mutlak değerini al . dan sonra 2 basamak olsun
  const formatted = Math.abs(percentage).toFixed(2);

  // işaretini belirle
  const sign = percentage >= 0 ? "+" : "-";

  // işaretini ekle ve return et
  return `${sign}${formatted}%`;
};

// büyük sayı formatla
// 1e12 = 10^12 = 1000000000000000
export const formatBigNumber = (number) => {
  if (!number) return "N/A";

  if (number > 1e12) {
    return "$" + (number / 1e12).toFixed(2) + "T";
  } else if (number > 1e9) {
    return "$" + (number / 1e9).toFixed(2) + "Mr";
  } else if (number > 1e6) {
    return "$" + (number / 1e6).toFixed(2) + "Mn";
  } else {
    return "$" + number.toLocaleString();
  }
};

// fiyatı formatla
export const formatPrice = (price) => {
  if (!price) return "N/A";

  if (price < 0.01) {
    return "$" + price.toFixed(6);
  } else if (price < 1) {
    return "$" + price.toFixed(4);
  } else if (price < 100) {
    return "$" + price.toFixed(2);
  } else {
    return "$" + price.toLocaleString();
  }
};
