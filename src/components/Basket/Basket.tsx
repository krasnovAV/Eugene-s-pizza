import React, {FC} from 'react';
import "./Basket.scss"
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {IProductInBasket} from "../../models/models";
import {basketSlice} from "../../store/reducers/basketSlice";

type Props = {
    basketActive: boolean,
    setBasketActive: (basketActive: boolean) => void,
}

export const Basket: FC<Props> = ({basketActive, setBasketActive}) => {
    const dispatch = useAppDispatch();
    const {products} = useAppSelector(state => state.basket)
    let totalPrice = 0;
    products.forEach(product => totalPrice += product.price)

    return (
        <div className="basketWrapper" onClick={() => setBasketActive(false)}>
            <div className="basket">
                <div className="basket__content">
                    {products.map(product => <ProductInBasket key={product.id}
                                                              product={product}/>)}
                </div>
                    {totalPrice
                    ? <div>Стоимость всего: {totalPrice} р</div>
                    : ""}
                <div className="basket__footer">
                    <button onClick={() => dispatch(basketSlice.actions.clearBasket())}>Очистить корзину</button>
                    <button onClick={e => e.stopPropagation()}>Оплатить</button>
                </div>
            </div>
        </div>
    );
};


type PropsProductInBasket = {
    product: IProductInBasket
}

const ProductInBasket: FC<PropsProductInBasket> = ({product}) => {
    const dispatch = useAppDispatch();

    return (
        <div className="productInBasket">
            <div className="productInBasket__description">
                <div className="productInBasket__details">
                    <div>
                        {product.title}
                    </div>
                    <div>
                        {product.details.length > 0 && product.details.join(", ")}
                    </div>
                </div>
                <div className="productInBasket__price">
                    <div>
                        *{product.count} шт
                    </div>
                    <div>
                        {product.price * product.count} р
                    </div>
                </div>
            </div>
            <button onClick={e => {
                e.stopPropagation();
                dispatch(basketSlice.actions.deleteFromBasket(product));
            }}>X
            </button>
        </div>
    )
}

