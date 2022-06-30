import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProductInBasket} from "../../models/models";


interface IBasketState {
    products: IProductInBasket[],
}

const initialState: IBasketState = {
    products: []
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addInBasket(state, action: PayloadAction<IProductInBasket>) {
            let index = state.products.findIndex(product => product.id === action.payload.id)
            if(index >=0 ){
                state.products[index].count +=1;
            } else{
                state.products.push(action.payload)
            }

        },
        deleteFromBasket(state, action: PayloadAction<IProductInBasket>) {
            state.products = state.products.filter(product => product.id !== action.payload.id);
        },
        clearBasket(state) {
            state.products = [];
        }
    }
})




export default basketSlice.reducer