import {combineReducers, configureStore} from "@reduxjs/toolkit";
import pizza from "./reducers/pizzaSlice"
import sushi from "./reducers/sushiSlice"
import basket from "./reducers/basketSlice"

const rootReducer = combineReducers({
    pizza: pizza,
    sushi: sushi,
    basket: basket,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>  // получение типа состояния
export type AppStore = ReturnType<typeof setupStore>    // получение типа store
export type AppDispatch = AppStore["dispatch"]          // получение типа dispatch. определив его тип
//мы не сможем задиспатчить экшены, которые мы не определили


