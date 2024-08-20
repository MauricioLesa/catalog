import "./StoreProducts.css";

interface StoreProductsProps{
    productList:{ name: string; price: number; description: string; }[]
}


const StoreProductsDisplay =  (props:StoreProductsProps) => { 
    return (
        <div className="flex-grow-1 d-flex text-center align-items-center flex-column">
            <div className="product-list-table mt-5">
                <div className="d-flex justify-content-between">
                    <button className="btn btn-light"><i className="bi bi-plus"></i></button>
                    <button className="btn btn-light"><i className="bi bi-pencil"></i></button>
                </div>
                {props.productList.map(
                    (product, id) => (
                        <div key={id} className="product-list-row mt-4">
                            <span className="product-list-name">{product.name}</span>
                            <span className="product-list-description">{product.description}</span>
                            <span className="product-list-price">{product.price}</span>
                        </div>
                    )
                )}
            </div>
            
        </div>
    )
 }

 export default StoreProductsDisplay;