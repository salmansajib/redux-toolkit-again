import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todos/todoSlice';

const store = configureStore({
  reducer: todoReducer,
});

export default store;
