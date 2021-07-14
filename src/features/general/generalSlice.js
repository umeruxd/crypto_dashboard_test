import { createSlice } from '@reduxjs/toolkit';

export const generalReducer = createSlice({
  name: 'general',
  initialState: {
    example: null
  },
  reducers: {
    exaple: () => {
      return true;
    }
  }
});
export const { exaple } = generalReducer.actions;
export const exampleAsync = ref => dispatch => {
  /**
   * hide on clicked outside of the element
   */
  return new Promise((resolve, reject) => {});
};

export const selectLangauge = state => {
  return state.general.example;
};

export default generalReducer.reducer;
