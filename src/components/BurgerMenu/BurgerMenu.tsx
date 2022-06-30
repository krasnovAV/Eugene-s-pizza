import React, {FC} from 'react';
import "./BurgerMenu.scss"
import {Link} from "react-router-dom";

interface IItem {
    href: string,
    value: string,
}

type Props = {
    header: string;
    items: IItem[];
    active: boolean;
    setActive: (active: boolean) => void;
    label: React.ReactNode;
}

export const BurgerMenu: FC<Props> = ({header, items, active, setActive, label}) => {
    return (
        <div className={active ? "menu active" : " menu"} onClick={() => setActive(false)}>
            <div className="blur"/>
            <div className="menu__content">
                {label}
                <ul onClick={e => e.stopPropagation()}>
                    {items.map(item =>
                        <li key={item.value}>
                            <Link to={item.href}>{item.value}</Link>
                        </li>)}
                </ul>
            </div>
        </div>
    )
}

