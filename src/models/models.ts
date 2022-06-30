export const LIST_PAGES = [
    {
        href: "/pizza",
        value: "Пицца",
    },
    {
        href: "/sushi",
        value: "Суши",
    },
    {
        href: "/snacks",
        value: "Закуски",
    },
    {
        href: "/login",
        value: "Login",
    },
]

interface IPizzaPrice {
    small: number,
    medium: number,
    large: number,
}

interface IPizzaSize {
    small: string,
    medium: string,
    large: string,
}

export interface IPizza extends IProduct {
    price: IPizzaPrice,
    size: IPizzaSize,
}

export interface ISushi extends IProduct {
}

export interface IProduct {
    id: number,
    type: string,
    title: string,
    image: string,
    price: number | any,
    size: any,
    components: string[],
}

export interface IProductInBasket {
    id: string
    title: string,
    details: string[],
    price: number
    count: number
}