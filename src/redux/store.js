import { configureStore } from '@reduxjs/toolkit';
import ItemsReducer from './itemsRedux/itemSlice';


export default configureStore({
  reducer: {
    items: ItemsReducer,
  },
  
})