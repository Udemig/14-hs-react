/*
 ! Reducer Fonksiyonu
 * state'in son halini ve dispatch edilen action'u paramatre olarak alır
 * reducer fonksiyonundan return edilen değer state'in son hali olur
 * dispatch edilen aksiyonun tipine göre koşullu bir ifadeyle state'in nasıl değişeceğine karar veriririz
*/
const counterReducer = (state, action) => {
  switch (action.type) {
    case "ARTTIR":
      return state + 1;

    case "AZALT":
      return state - 1;

    case "SIFIRLA":
      return 0;

    default:
      return state;
  }
};

export default counterReducer;
