import { Product } from "../../APIs/ProductAPI"

type ProductCard = {
    product:Product,
    key:number
}

export const ProductCard = (props:ProductCard) => {
    return (
        <div className="product-card d-flex">
            <img className="me-3" width="100" height="90"></img>
            <div>
                <div className="d-flex justify-content-between">
                    <span className="float-left">{props.product.name}</span>
                    <span className="float-right">{props.product.price}</span>
                </div>
                <span>{props.product.description}</span>
            </div>
            
        </div>
    )
}