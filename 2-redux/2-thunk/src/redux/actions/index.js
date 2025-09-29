import axios from "axios";

//! Redux Thunk Aksiyonu
// İki fonksiyonu içe içe tanımlarız
// İçerideki fonksiyon asenkron olabilir ve dispatch'i parametre olarak alır
export const getUsers = () => {
  return async (dispatch) => {
    dispatch({ type: "USERS_LOADING" });

    axios
      .get("https://dummyjson.com/users")
      .then((res) => dispatch({ type: "USERS_SUCCESS", payload: res.data.users }))
      .catch((err) => dispatch({ type: "USERS_ERROR", payload: err.message }));
  };
};
