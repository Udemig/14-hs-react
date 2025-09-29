// Aksiyon tipleri string bir değer olduğunda yanlış yazıma olduk müsait
// Bu tarz dalgınlık kaynaklı hataların önüne geçmek için aksiyonları tek bir noktada tanımlayabiliriz

const ACTION_TYPES = {
  CREATE: "CREATE_TODO",
  DELETE: "DELETE_TODO",
  TOGGLE: "TOGGLE_TODO",
  UPDATE: "UPDATE_TODO",
  SET: "SET_TODOS",
  LOADING: "SET_LOADING",
  ERROR: "SET_ERROR",
};

export default ACTION_TYPES;

export const CREATE = "CREATE_TODO";
export const UPDATE = "UPDATE_TODO";
