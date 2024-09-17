import { Product } from "../../APIs/ProductAPI"

type ProductCard = {
    product:Product,
    key:number
}

export const ProductCard = (props:ProductCard) => {
    return (
        <div>
            <h4>{props.product.name}</h4>
            <span>{props.product.description}</span>
            <span>{props.product.price}</span>
        </div>
    )
}