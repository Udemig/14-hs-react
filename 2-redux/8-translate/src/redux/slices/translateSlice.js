import { createSlice } from "@reduxjs/toolkit";
import { translateText } from "../actions";

const initialState = {
  sourceLang: { value: undefined, label: "Dili algıla" },
  targetLang: { value: "en", label: "English" },
  textToTranslate: "",
  translatedText: "",
  isLoading: false,
  error: null,
  history: [],
};

const translateSlice = createSlice({
  name: "translate",
  initialState,
  reducers: {
    setSource: (state, { payload }) => {
      state.sourceLang = payload;
    },
    setTarget: (state, { payload }) => {
      state.targetLang = payload;
    },
    setText: (state, { payload }) => {
      state.textToTranslate = payload;
    },
    handleSwap: (state) => {
      const tempSource = state.sourceLang;
      const tempTarget = state.targetLang;
      const tempText = state.textToTranslate;
      const tempTranslated = state.translatedText;

      state.sourceLang = tempTarget;
      state.targetLang = tempSource;
      state.textToTranslate = tempTranslated;
      state.translatedText = tempText;
    },
    clearHistory: (state) => {
      state.history = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(translateText.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(translateText.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
    builder.addCase(translateText.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.translatedText = payload;

      // çeviri sonucnu geçmişe kaydet
      if (state.textToTranslate && payload) {
        state.history.unshift({
          id: Date.now(),
          textToTranslate: state.textToTranslate,
          translatedText: payload,
          sourceLang: state.sourceLang,
          targetLang: state.targetLang,
          timestamp: new Date().toLocaleDateString("tr"),
        });
      }
    });
  },
});

export const { setSource, setTarget, setText, handleSwap, clearHistory } = translateSlice.actions;

export default translateSlice.reducer;
