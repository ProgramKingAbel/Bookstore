import { createSlice } from "@reduxjs/toolkit";

const initialState = { books: [] };

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        added: (state, action) => state.books = action.payload,
        removed: (state, action) => state.books = action.payload,
    }
})

export default bookSlice.reducer;