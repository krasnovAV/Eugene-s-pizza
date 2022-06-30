import React, {FC, useState} from 'react';
import {IProduct} from "../../models/models";
import "./ProductCard.scss"
import {PizzaCardInfo} from "./ProductCardInfo/PizzaCardInfo";
import {ProductCardInfo} from "./ProductCardInfo/ProductCardInfo";

type Props = {
    product: IProduct;
}

export const ProductCard: FC<Props> = ({product}) => {
    const [cardInfoActive, setCardInfoActive] = useState(false);

    return (
        <div className="productCard" onClick={() => setCardInfoActive(false)}>
            <div>
                <img src={product.image} alt=""/>
                <div className="productCard__title">{product.title}</div>
                <div className="productCard__composition">{product.components.join(", ")}</div>
            </div>
            <div className="productCard__select">
                <button onClick={(e) => {
                    e.stopPropagation();
                    setCardInfoActive(true)
                }
                }>Выбрать
                </button>
                {typeof (product.price) === "number"
                    ? <div> от {product.price} р</div>
                    : <div> от {product.price.small} р</div>}
            </div>
            {cardInfoActive
                ? product.type === "pizza"
                    ? <PizzaCardInfo
                        cardInfoActive={cardInfoActive}
                        setCardInfoActive={setCardInfoActive}
                        product={product}/>
                    : <ProductCardInfo cardInfoActive={cardInfoActive}
                                       setCardInfoActive={setCardInfoActive}
                                       product={product}/>
                : ""
            }

        </div>
    )
};

