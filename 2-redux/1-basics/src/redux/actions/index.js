import ACTION_TYPES from "./actionTypes";

// Component içerisindeki karışıklığı azaltmak için nesne aksiyon nesnelerini oluşturan fonksiyonlar yazdık
export const setLoading = () => ({ type: ACTION_TYPES.LOADING });

export const setTodos = (payload) => ({ type: ACTION_TYPES.SET, payload });

export const setError = (payload) => ({ type: ACTION_TYPES.ERROR, payload });

export const createTodo = (payload) => ({ type: ACTION_TYPES.CREATE, payload });

export const toggleTodo = (payload) => ({ type: ACTION_TYPES.TOGGLE, payload });

export const deleteTodo = (payload) => ({ type: ACTION_TYPES.DELETE, payload });

export const updateTodo = (payload) => ({ type: ACTION_TYPES.UPDATE, payload });
