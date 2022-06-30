import React, {FC} from 'react';
// @ts-ignore
import pizzaIcon from "../../images/icon/pizza_icon.png";
import "./Label.scss"

export const Label: FC = () => {
    return (
        <div className="label">
            <img src={pizzaIcon} alt=""/>
            <div>Eugene's Pizza</div>
        </div>
    );
};

