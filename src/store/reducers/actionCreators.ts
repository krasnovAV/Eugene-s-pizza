import {AppDispatch} from "../store";
import {pizzaSlice} from "./pizzaSlice";
import axios from "axios";
import {IPizza, ISushi} from "../../models/models";
import {sushiSlice} from "./sushiSlice";

export const fetchPizza = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(pizzaSlice.actions.fetchPizza);
        const response = await axios.get<IPizza[]>("http://localhost:3002/pizza")
        dispatch(pizzaSlice.actions.fetchPizzaSuccess(response.data))
    } catch (e: any) {
        dispatch(pizzaSlice.actions.fetchPizzaError(e.message));
    }
}

export const fetchSushi = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(sushiSlice.actions.fetchSushi);
        const response = await axios.get<ISushi[]>("http://localhost:3002/sushi")
        dispatch(sushiSlice.actions.fetchSushiSuccess(response.data))
    } catch (e: any) {
        dispatch(sushiSlice.actions.fetchSushiError(e.message));
    }
}

