import { SetStateAction, useState } from "react";
import "./StoreProducts.css";
import { NewProduct } from "../APIs/ProductAPI";
import ProductModal from "./ProductModal";

interface StoreProductsProps{
    product:NewProduct,
    productList:{ name: string; price: number; description: string; }[],
    newProduct:() => Promise<void>,
    uploadImage: (e: React.ChangeEvent<HTMLInputElement>) => void,
    setProduct: React.Dispatch<React.SetStateAction<NewProduct>>
}


const StoreProductsDisplay =  (props:StoreProductsProps) => { 
    const [disabled, setDisabled] = useState<boolean>(true);

    
    
    return (
        <div className="flex-grow-1 d-flex text-center align-items-center flex-column">
            <div className="product-list-table mt-5">
                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#ProductAddModal">
                        <i className={"bi bi-plus"} ></i>
                    </button>                    
                    <button className="btn btn-light" onClick={() => setDisabled(!disabled)}>
                        <i className={disabled?"bi bi-pencil":"bi bi-floppy"}></i>
                    </button>
                </div>

                <ProductModal 
                    product={props.product}
                    newProduct={props.newProduct} 
                    uploadImage={props.uploadImage} 
                    setProduct={props.setProduct}
                />
                
                {props.productList.map(
                        (product, id) => (
                            <div key={id} className="product-list-row mt-1">
                                <textarea  className="product-list-elemnt w-25" disabled={disabled}  value={product.name}></textarea >
                                <textarea  className="product-list-elemnt w-50" disabled={disabled}  value={product.description}></textarea >
                                <textarea  className="product-list-elemnt w-25" disabled={disabled}  value={product.price}></textarea >
                            </div>
                        )
                    )}
            </div>
            
        </div>
    )
 }

 export default StoreProductsDisplay;