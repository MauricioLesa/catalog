import { ProductCard } from "./ProductCard"
import "./ProductList.css"

const productsList = [
    {
        name:"tenis",
        price:0.0,
        description:"example long description dasdasd sa dsadasdas s",
        image:""
    },
    {
        name:"celular",
        price:0.0,
        description:"example long description",
        image:""
    },
    {
        name:"bebidas",
        price:0.0,
        description:"example long description",
        image:""
    },
    {
        name:"example product",
        price:0.0,
        description:"example long description",
        image:""
    },   
]


export const ProductList = () => {
    return (
        <div className="w-100 mt-5  d-flex flex-column">
            <input className="px-2 mb-3 py-1 mx-auto product-search w-75" type="text" placeholder="buscar"/>
            <div className="mx-auto">
                {productsList.map( (product,key) => (
                    <ProductCard product={product} key={key}/>
                ))}
            </div>
        </div>
    )
}