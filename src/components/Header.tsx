import React, {FC, useState} from 'react';
import "./Header.scss"
import {Link} from 'react-router-dom';
import {BurgerMenu} from "./BurgerMenu/BurgerMenu";
import {Label} from "./Label/Label";
import {LIST_PAGES as items} from "../models/models";
// @ts-ignore
import basket from "../images/icon/basket.jpg"
import {Basket} from "./Basket/Basket";
import {useAppSelector} from "../hooks/redux";


type Props = {
    isBigScreen: boolean;
}

export const Header: FC<Props> = ({isBigScreen}) => {
    const [menuActive, setMenuActive] = useState(false);
    const [basketActive, setBasketActive] = useState(false);
    const {products} = useAppSelector(state=>state.basket)

    return (
        <div className="header">
            <nav>
                <Link to="/">
                    <Label/>
                </Link>
                {isBigScreen
                    ?
                    <div className="header__menu">
                        <div className="header__menu__block">
                            <Link to="/pizza" className="header__menu__item">
                                <div>Пицца</div>
                            </Link>
                            <Link to="/sushi" className="header__menu__item">
                                <div>Суши</div>
                            </Link>
                            <Link to="/snacks" className="header__menu__item">
                                <div>Закуски</div>
                            </Link>
                        </div>
                        <Link to="/login" className="header__menu__item">
                            <div>Login</div>
                        </Link>
                    </div>
                    :
                    <div className="burgerButton" onClick={() => setMenuActive(!menuActive)}>
                        <span/>
                    </div>
                }
                <div className="header__basket"
                     onClick={() => setBasketActive(true)}>
                    <img src={basket} alt=""/> {products.length > 0 && products.length}
                </div>
                <BurgerMenu header={"Eugene's Pizza"} items={items}
                            active={menuActive} setActive={setMenuActive}
                            label={<Label/>}/>
                {basketActive
                    ? <Basket basketActive={basketActive} setBasketActive={setBasketActive}/>
                    : ""
                }
            </nav>


        </div>
    );
};
