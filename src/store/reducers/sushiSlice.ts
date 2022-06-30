import {ISushi} from "../../models/models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface ISushiState {
    sushi: ISushi[],
    isLoading: boolean,
    error: string,
}

const initialState: ISushiState = {
    sushi: [],
    isLoading: false,
    error: "",
}

export const sushiSlice = createSlice({
    name: "sushi",
    initialState,
    reducers: {
        fetchSushi(state) {
            state.isLoading = true;
        },
        fetchSushiSuccess(state, action: PayloadAction<ISushi[]>) {
            state.isLoading = false;
            state.error = "";
            state.sushi = action.payload;
        },
        fetchSushiError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
            state.sushi = [];
        }
    }
})

export default sushiSlice.reducer