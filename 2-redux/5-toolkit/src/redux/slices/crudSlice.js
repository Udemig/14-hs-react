import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import { INITIAL_TASKS } from "../../utils/constants";

const crudSlice = createSlice({
  name: "crud",
  initialState: { tasks: INITIAL_TASKS },
  reducers: {
    // yeni task oluştur
    createTask: (state, action) => {
      // teni task'e id tanımla
      action.payload.id = v4();

      // tasks dizisine yeni taski ekle
      state.tasks.unshift(action.payload);
    },

    // task'i kaldır
    deleteTask: (state, action) => {
      // id'si bilenen task'in dizideki sırasını bul
      const index = state.tasks.findIndex((t) => t.id === action.payload);

      // diziden indexini bulduğum taski kaldır
      state.tasks.splice(index, 1);
    },

    // task'i güncelle
    updateTask: (state, action) => {
      // düzenlenicek elemanın dizideki index'ini öğren
      const index = state.tasks.findIndex((t) => t.id === action.payload);

      // sırasını bulduğumuz elemanı güncelle
      state.tasks.splice(index, 1, action.payload);
    },
  },
});

export const { createTask, deleteTask, updateTask } = crudSlice.actions;

export default crudSlice.reducer;
