import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

/*
 * createAsyncThunk ile asenkron bir thunk aksiyonu oluşturucaz
 * api isteğini attıktan sonra gelen cevaba bağlı olarak reducer'a otomatil haber gönderir
 * api isteği atıldığı anda pending aksiyonu dispatch eder
 * api isteği başarısız olursa rejected aksiyonu dispatch eder (error:hata)
 * api isteği başarılı olursa fulfilled aksiyonu dispatch eder (payload:return)
 */
export const getUsers = createAsyncThunk("updated/getUsers", async () => {
  // api isteğini at
  const res = await axios.get("https://dummyjson.com/users");

  // aksiyonun payload değerini return ediyoruz
  return res.data.users;
});

const updatedSlice = createSlice({
  name: "updated",
  initialState: { isLoading: true, error: null, data: null },
  // senkron aksiyonlar için kullanırız
  reducers: {},
  // asenkron aksiyonlar için kullanırız
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    });
  },
});

export default updatedSlice.reducer;
