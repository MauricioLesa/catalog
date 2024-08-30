import { SetStateAction, useState } from "react";
import "./StoreProducts.css";
import { Product } from "../APIs/ProductAPI";
import ProductModal from "./ProductModal";

interface StoreProductsProps{
    product:Product,
    productList:Product[],
    newProduct:() => Promise<void>,
    editProduct:(id:number) => Promise<void>,
    uploadImage: (e: React.ChangeEvent<HTMLInputElement>) => void,
    setProduct: React.Dispatch<React.SetStateAction<Product>>
}


const StoreProductsDisplay =  (props:StoreProductsProps) => { 
   
    
    return (
        <div className="flex-grow-1 d-flex text-center align-items-center flex-column">
            <div className="product-list-table mt-5">
                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#ProductAddModal">
                        <i className={"bi bi-plus"} ></i>
                    </button>                    
                    
                </div>

                <ProductModal 
                    modalName = {"ProductAddModal"}
                    product={props.product}
                    newProduct={props.newProduct} 
                    uploadImage={props.uploadImage} 
                    setProduct={props.setProduct}
                />
                
                {props.productList.map(
                        (product, id) => (
                            <div key={id} className="product-list-row mt-1">
                                <textarea  className="product-list-elemnt w-25" disabled  value={product.name}></textarea >
                                <textarea  className="product-list-elemnt w-50" disabled  value={product.description}></textarea >
                                <textarea  className="product-list-elemnt w-25" disabled  value={product.price}></textarea >
                                <button className="btn btn-light" data-bs-toggle="modal" onClick={() => props.setProduct(product)} data-bs-target={"#ProductEditModal"+id}>
                                    <i className={"bi bi-pencil"}></i>
                                </button>
                                <ProductModal
                                    modalName = {"ProductEditModal"+id}
                                    product={props.product}
                                    newProduct={() => props.editProduct(id)} 
                                    uploadImage={props.uploadImage} 
                                    setProduct={props.setProduct}
                                />
                            </div>
                        )
                    )}
                    
            </div>
            
        </div>
    )
 }

 export default StoreProductsDisplay;