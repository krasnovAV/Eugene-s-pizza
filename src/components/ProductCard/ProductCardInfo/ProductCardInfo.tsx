import React, {FC} from 'react';
import "./ProductCardInfo.scss"
import {Modal} from 'antd';
import {IProductInBasket, ISushi} from "../../../models/models";
import {basketSlice} from "../../../store/reducers/basketSlice";
import {useAppDispatch} from "../../../hooks/redux";

type Props = {
    cardInfoActive: boolean,
    setCardInfoActive: (cardInfoActive: boolean) => void,
    product: ISushi
}

export const ProductCardInfo: FC<Props> = ({cardInfoActive, setCardInfoActive, product}) => {
    const dispatch = useAppDispatch();

    const handleCancel = () => {
        setCardInfoActive(false);
    };

    const addToBasket = () => {
        const payload: IProductInBasket = {
            title: product.title,
            price: product.price,
            details: [],
            id: product.title + product.price,
            count: 1,
        }

        dispatch(basketSlice.actions.addInBasket(payload))
    }

    return (
        <div className="productCardInfo" onClick={(e) => e.stopPropagation()}>
            <Modal visible={cardInfoActive} onCancel={handleCancel}
                   bodyStyle={{height: 600}} style={{top: 10}}
                   footer={null}>
                <div className="cardInfo">
                    <>
                        <img src={product.image} alt=""/>
                        <div className="cardInfo__title">{product.title}</div>
                        <div className="cardInfo__composition">{product.components.join(", ")}</div>
                        <div className="cardInfo__price">
                            Цена: {product.price} р
                        </div>
                    </>

                    <div className="cardInfo__footer">
                        <button className="cardInfo__btn" onClick={() => setCardInfoActive(false)}>Отменить</button>
                        <button className="cardInfo__btn" onClick={() => {
                            addToBasket();
                            setCardInfoActive(false);
                        }}>Добавить в корзину
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

