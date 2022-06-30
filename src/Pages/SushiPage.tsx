import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchSushi} from "../store/reducers/actionCreators";
import {ProductCard} from "../components/ProductCard/ProductCard";

const SushiPage = () => {
    const dispatch = useAppDispatch();
    const {sushi, isLoading,error} = useAppSelector(state => state.sushi)

    useEffect(()=>{
        setTimeout(()=>{
            dispatch(fetchSushi());
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
            {sushi.map(item => <ProductCard key={item.id} product={item}/>)}
        </div>
    );
};

export default SushiPage;