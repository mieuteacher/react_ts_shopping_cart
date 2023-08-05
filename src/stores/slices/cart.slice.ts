import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CartItem {
    id: number;
    productId: number;
    quantity: number;
}

interface InitialState {
    loading: boolean;
    data: CartItem[];
}

const initialState: InitialState = {
    loading: false,
    data: [
        {
            id: 1,
            productId: 1,
            quantity: 5
        },
        {
            id: 2,
            productId: 2,
            quantity: 10
        },
    ],
};


const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            let item = state.data.find(item => item.productId == action.payload.productId);
            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.data.unshift(action.payload);
            }
        },
        delete: (state, action: PayloadAction<number>) => {
            state.data = state.data.filter(item => item.id != action.payload)
        },
        update: (state, action: PayloadAction<CartItem>) => {
            state.data = state.data.map(product => {
                if(product.productId == action.payload.productId) {
                    return action.payload
                }
                return product
            });
        },
    }
})

export const cartAction = {
    ...cartSlice.actions
}

export const cartReducer = cartSlice.reducer;