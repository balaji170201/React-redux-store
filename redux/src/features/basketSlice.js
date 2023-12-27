import { createSlice } from '@reduxjs/toolkit';
import { data } from '../utils/products';

const initialState = {
    products: data,
    amount: 0,
    total: 0,
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        increaseAmount: (state, { payload }) => {
            const { name } = payload;
            const item = state.products.find((item) => item.title === name);
            if (item) {
                item.amount++;
            }
        },
        decreaseAmount: (state, { payload }) => {
            const { name } = payload;
            const item = state.products.find((item) => item.title === name);
            if (item && item.amount > 1) {
                item.amount--;
            }
        },
        removeItem: (state, { payload }) => {
            state.products = state.products.filter((item) => item.title !== payload.name);
        },
        updateTotal: (state) => {
            let uniqueProductCount = 0;
            let total = 0;
            
            state.products.forEach((item) => {
                if (item.amount > 0) {
                    uniqueProductCount++;
                    total += item.amount * item.price;
                }
            });

            state.amount = uniqueProductCount;
            state.total = total;
        },
    },
});


export const { increaseAmount, decreaseAmount, removeItem, updateTotal } = basketSlice.actions;

export default basketSlice.reducer;