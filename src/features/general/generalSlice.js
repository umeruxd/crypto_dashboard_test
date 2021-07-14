import { createSlice } from '@reduxjs/toolkit';
import btcIcon from 'static/images/bitcoin.svg';
export const generalReducer = createSlice({
  name: 'general',
  initialState: {
    currency: [
      {
        type: 'btc',
        balance: 124.09786221,
        icon: btcIcon
      }
    ],
    selectedCurrency: {},
    activeCurrency: '',
    hasNotification: true
  },
  reducers: {
    setCurrency: (state, payload) => {
      state.currency.forEach(currency => {
        if (currency.type === payload.payload) {
          state.activeCurrency = payload.payload;
          state.selectedCurrency = currency;
        }
      });
    }
  }
});
export const { setCurrency } = generalReducer.actions;
export const searchCall = ref => dispatch => {
  /**
   * hide on clicked outside of the element
   */
  return new Promise((resolve, reject) => {
    console.log(ref ? ref + ' search term' : 'type something');
    return ref;
  });
};
export const handleBuySellForm = ref => dispatch => {
  /**
   * hide on clicked outside of the element
   */
  return new Promise((resolve, reject) => {
    console.log(ref);
    return ref;
  });
};

export const selectCurrency = state => {
  return state.general.selectedCurrency;
};
export const hasNotification = state => state.general.hasNotification;

export default generalReducer.reducer;
