import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        count: 0,
        sum: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
            state.count += 1;
            state.sum += action.payload.price;
        },
        clearCart: (state) => {
            state.items = [];
            state.count = 0;
            state.sum = 0;
        },
        setQuantity: (state, action) => {
            const { id, amount } = action.payload;
            const item = state.items.find(obj => obj.id === Number(id));
            if (item) {
                item.quantity = amount;
                state.sum = state.items.reduce((total, item) => {
                    return total + item.price * item.quantity;
                }, 0);
            }
        },
    }
});

export const { addToCart, clearCart, setQuantity} = cartSlice.actions;
export default cartSlice.reducer;