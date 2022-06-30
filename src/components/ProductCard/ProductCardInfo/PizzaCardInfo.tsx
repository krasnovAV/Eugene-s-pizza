import React, {FC, useState} from 'react';
import "./ProductCardInfo.scss"
import type {RadioChangeEvent} from 'antd';
import {Modal, Radio} from 'antd';
import {IPizza, IProductInBasket} from "../../../models/models";
import {useAppDispatch} from "../../../hooks/redux";
import {basketSlice} from "../../../store/reducers/basketSlice";

type Props = {
    cardInfoActive: boolean,
    setCardInfoActive: (cardInfoActive: boolean) => void,
    product: IPizza
}

export const PizzaCardInfo: FC<Props> = ({cardInfoActive, setCardInfoActive, product}) => {
    const [radioBtnValue, setRadioBtnValue] = useState(product.size.small);
    const [price, setPrice] = useState<number>(product.price.small);
    const dispatch = useAppDispatch();

    const options = [
        {label: product.size.small, value: product.size.small},
        {label: product.size.medium, value: product.size.medium},
        {label: product.size.large, value: product.size.large},
    ];

    const handleCancel = () => {
        setCardInfoActive(false);
    };

    const onChange = ({target: {value}}: RadioChangeEvent) => {
        setRadioBtnValue(value);

        switch (value) {
            case product.size.small:
                setPrice(product.price.small);
                break;
            case product.size.medium:
                setPrice(product.price.medium);
                break;
            case product.size.large:
                setPrice(product.price.large);
                break;
        }
    };

    const addToBasket = () => {
        const payload: IProductInBasket = {
            title: product.title,
            price: price,
            details: [radioBtnValue],
            id: product.title + price,
            count: 1,
        }

        dispatch(basketSlice.actions.addInBasket(payload))
    }

    return (
        <div className="productCardInfo" onClick={(e) => e.stopPropagation()}>
            <Modal visible={cardInfoActive} onCancel={handleCancel}
                   bodyStyle={{height: 600}} style={{top: 0}}
                   footer={null}>
                <div className="cardInfo">
                    <>
                        <img src={product.image} alt=""/>
                        <div className="cardInfo__title">{product.title}</div>
                        <div className="cardInfo__composition">{product.components.join(", ")}</div>
                        <Radio.Group options={options} onChange={onChange}
                                     value={radioBtnValue} optionType="button"
                                     size={"large"}/>
                        <div className="cardInfo__price">
                            Цена: {price} р
                        </div>
                    </>

                    <div className="cardInfo__footer">
                        <button className="cardInfo__btn" onClick={() => setCardInfoActive(false)}>Отменить</button>
                        <button className="cardInfo__btn"
                                onClick={() => {
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

