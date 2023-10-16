import pizzaImg from "../images/pizza.png"
import burgerImg from "../images/burger.png"
import cocaImg from "../images/coca.png"
import icecreamImg from "../images/icecream.png"
import icecream1Img from "../images/icecream1.png"
import kebabImg from "../images/kebab.png"
import saladImg from "../images/salad.png"
import waterImg from "../images/water.png"

export function getData(){
    return [
        {title:'Pizza', price:17.99, Image: pizzaImg, id:1},
        {title:'Burger', price:17.99, Image: burgerImg, id:2},
        {title:'Coca', price:17.99, Image: cocaImg, id:3},
        {title:'Icecream', price:17.99, Image: icecreamImg, id:4},
        {title:'Icecream1', price:17.99, Image: icecream1Img, id:5},
        {title:'Kebab', price:17.99, Image: kebabImg, id:6},
        {title:'Salad', price:17.99, Image: saladImg, id:7},
        {title:'Water', price:17.99, Image: waterImg, id:8}
    ]
}
