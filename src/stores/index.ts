import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { productReducer } from './slices/product.slice';
import { cartReducer } from './slices/cart.slice';

// Combine the reducers into a single rootReducer
const rootReducer = combineReducers({
  productStore: productReducer,
  cartStore: cartReducer,
});

export type RootStore = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
