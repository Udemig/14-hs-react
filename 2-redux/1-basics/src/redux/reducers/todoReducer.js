import ACTION_TYPES from "../actions/actionTypes";

/*
 ! Reducer fonksiyonu
 * State'i tutan ve yöneten fonksiyon
 * Tutucağı state'in ilk değerini initialState olarak tanımlarız
 * Parametre olarak tuttuğu state'in güncel değerini ve dispatch edilen action'ı alır
 * Reducer fonksiyonundan return edilen değer, reducer'ın tuttuğu state'in son hali olur.
 * Fonksiyon içerisinde gelen aksiyona göre state'in nasıl değişeceğine karar veriririz.
*/

const initialState = {
  todos: [],
  isLoading: true,
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CREATE:
      // aksiyonun payloadı ile gelen yeni todoyu todos dizisine ekle
      const newTodos = state.todos.concat(action.payload);
      // state'in yeni değerini return et
      return { ...state, todos: newTodos };

    case ACTION_TYPES.DELETE:
      // aksiyonun payload'ı ile gelen id'li todo'yu diziden kaldır
      const filtredTodos = state.todos.filter((todo) => todo.id !== action.payload);

      // reducer'da tutulan state'i güncelle
      return { ...state, todos: filtredTodos };

    case ACTION_TYPES.TOGGLE:
      // aksiyonun payload'ı ile gelen todo'nun isDone değerini güncelle
      const toggledTodos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );

      // state'i güncelle
      return { ...state, todos: toggledTodos };

    case ACTION_TYPES.UPDATE:
      // aksiyonun payload'ı ile gelen güncel todo'yu state'deki dizide de güncelle
      const updatedTodos = state.todos.map((todo) => (todo.id === action.payload.id ? action.payload : todo));

      // state'i güncelle
      return { ...state, todos: updatedTodos };

    case ACTION_TYPES.LOADING:
      return { ...state, isLoading: true };

    case ACTION_TYPES.SET:
      return { ...state, isLoading: false, error: null, todos: action.payload };

    case ACTION_TYPES.ERROR:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export default todoReducer;
