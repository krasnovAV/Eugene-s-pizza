import {IPizza} from "../../models/models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface IPizzaState {
    pizza: IPizza[],
    isLoading: boolean,
    error: string,
}

const initialState: IPizzaState = {
    pizza: [],
    isLoading: false,
    error: "",
}

export const pizzaSlice = createSlice({
    name: "pizza",
    initialState,
    reducers: {
        fetchPizza(state) {
            state.isLoading = true;
        },
        fetchPizzaSuccess(state, action: PayloadAction<IPizza[]>) {
            state.isLoading = false;
            state.error = "";
            state.pizza = action.payload;
        },
        fetchPizzaError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
            state.pizza = [];
        }
    }
})

export default pizzaSlice.reducer