import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchPizza} from "../store/reducers/actionCreators";
import {ProductCard} from "../components/ProductCard/ProductCard";
import "./ProductPage.scss"


const PizzaPage: FC = () => {
    const dispatch = useAppDispatch();
    const {pizza, isLoading,error} = useAppSelector(state => state.pizza)

    useEffect(()=>{
        setTimeout(()=>{
            dispatch(fetchPizza());
        }, 500)
    },[])




    if(isLoading){
        return <div>Загрузка...</div>
    }
    if(error){
        return <div>{error}</div>
    }

    return (
        <div className="productPage">
            {pizza.map(item => <ProductCard key={item.id} product={item}/>)}
        </div>
    );
};

export default PizzaPage;
