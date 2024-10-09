import { Product } from "../../APIs/ProductAPI"

type ProductCard = {
    product:Product,
    key:number
}

export const ProductCard = (props:ProductCard) => {
    return (
        <div className="product-card d-flex">
            <img className="me-3" width="100" height="90" src={`data:image/jpeg;base64, ${props.product.img}`} />
            <div className="w-100">
                <div className="d-flex justify-content-between">
                    <span >{props.product.name}</span>
                    <span >{props.product.price} Bs</span>
                </div>
                <span>{props.product.description}</span>
            </div>
            
        </div>
    )
}