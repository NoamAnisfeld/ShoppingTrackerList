import { createSlice } from "@reduxjs/toolkit";

export const ItemsReducer = createSlice({
  name: "items",
  initialState: { 
    value: [],
  },


  reducers: {
    setItems: (state, action) => {
      state.value = action.payload;
    },
    setReturnArchive: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setItems,setReturnArchive} =
ItemsReducer.actions;

export default ItemsReducer.reducer;
