import { createSlice } from '@reduxjs/toolkit';

export const generalReducer = createSlice({
  name: 'general',
  initialState: {
    example: null,
    hasNotification: true
  },
  reducers: {
    exaple: () => {
      return true;
    }
  }
});
export const { exaple } = generalReducer.actions;
export const searchCall = ref => dispatch => {
  /**
   * hide on clicked outside of the element
   */
  return new Promise((resolve, reject) => {
    console.log(ref ? ref + ' search term' : 'type something');
    return ref;
  });
};

export const selectLangauge = state => {
  return state.general.example;
};
export const hasNotification = state => state.general.hasNotification;

export default generalReducer.reducer;
