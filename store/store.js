import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import categorySlice from './slices/categorySlice';
import productSlice from './slices/productSlice';

import jobPostingSlice from "./slices/jobPostingSlice";

import catalogueSlice from "./slices/catalogueSlice";

import navbarCategorySlice from "./slices/navbarCategorySlice";

const rootReducer = combineReducers({
  category: categorySlice,
  product: productSlice,
  job:jobPostingSlice,
  catalogue:catalogueSlice,
  navbarCategory:navbarCategorySlice,
  
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
