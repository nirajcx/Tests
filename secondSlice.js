import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    loading: false,
    error: null,
}

// Async thunk to fetch products with error handling
export const getProducts = createAsyncThunk(
    'getProducts',
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch('https://fakestoreapi.com/products')
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();
            return data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
)

export const secondSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.loading = true
                state.error = null // Clear previous errors when loading starts
            })
            .addCase(getProducts.fulfilled, (state, { payload }) => {
                state.loading = false
                state.products = payload
                state.error = null
            })
            .addCase(getProducts.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload // Save the error message
            })
    },
})

export default secondSlice.reducer
