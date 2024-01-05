import { CUBANO_IMAGE, LATTE_IMAGE, LECHE_IMAGE, MACCHIATO_IMAGE, MOCCA_IMAGE, RISTRETTO_IMAGE } from "../../../components/configs/AppConst";

export default class HomeViewModel {

    data: CardHomeModel[] = [
        {
            image: MOCCA_IMAGE,
            name: "Mocha",
            desc: "Espresso with chocolate and steamed milk, often topped with whipped",
            price: "$ 25",
        },
        {
            image: MACCHIATO_IMAGE,
            name: "Macchiato",
            desc: "Espresso with a small amount of milk or foam",
            price: "$ 30",
        },
        {
            image: LATTE_IMAGE,
            name: "Latte",
            desc: "Espresso with a generous amount of steamed milk and a small layer of foam.",
            price: "$ 28",
        },
        {
            image: RISTRETTO_IMAGE,
            name: "Ristretto",
            desc: "Espresso with chocolate and steamed milk, often topped with whipped",
            price: "$ 19",
        },
        {
            image: LECHE_IMAGE,
            name: "Café con Leche",
            desc: "Similar to a latte, made with strong coffee and scalded milk.",
            price: "$ 24",
        },
        {
            image: CUBANO_IMAGE,
            name: "Café Cubano",
            desc: "Espresso with sugar, creating a sweet and strong coffee.",
            price: "$ 20",
        },
    ];

    constructor() {

    }
}