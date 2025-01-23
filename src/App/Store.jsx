import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; 
import { persistReducer, persistStore } from 'redux-persist';
import cartReducer from '../Features/CartSlice';

const persistConfig = {
  key: 'cart',
  storage,
};
const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    allCart: persistedReducer, 
  },
});
export const persistor = persistStore(store);
