import { configureStore } from '@reduxjs/toolkit';
import generalReducer from 'features/general/generalSlice';

export default configureStore({
  reducer: {
    general: generalReducer
  }
});
