import { createSlice } from "@reduxjs/toolkit";

export interface Product {
    id: number;
    name: string;
    price: number;
    des: string;
    avatar: string;
}

interface InitialState {
    loading: boolean;
    data: Product[];
}

const initialState: InitialState = {
    loading: false,
    data: [
        {
            id: 1,
            name: "Product A",
            price: 100000,
            des: "This is the description for Product A.",
            avatar: "https://cdn3.dhht.vn/wp-content/uploads/2023/01/30-giong-meo-noi-tieng-dep-nhat-cute-de-nuoi-va-gia-ban-bia.jpg",
        },
        {
            id: 2,
            name: "Product B",
            price: 200000,
            des: "This is the description for Product B.",
            avatar: "https://www.oca.edu.vn/uploads/images/info/con-meo-tieng-trung-la-gi.png",
        },
        {
            id: 3,
            name: "Product C",
            price: 300000,
            des: "This is the description for Product C.",
            avatar: "https://icdn.dantri.com.vn/thumb_w/680/2023/01/24/khoa-hocdocx-1674520013659.png",
        },
    ],
};

const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {

    }
})

export const productAction = {
    ...productSlice.actions
}

export const productReducer = productSlice.reducer;