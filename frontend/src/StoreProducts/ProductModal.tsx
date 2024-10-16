import { useEffect, useRef, useState } from "react";
import { Product } from "../APIs/ProductAPI";
import { emptyProduct } from "./StoreProducts";


interface ProductModalProps{
    product:Product,
    modalName:string,
    newProduct:() => Promise<void>,
    clearImage:() => void,
    uploadImage: (e: React.ChangeEvent<HTMLInputElement>) => void,
    setProduct: React.Dispatch<React.SetStateAction<Product>>
}


const ProductModal = (props:ProductModalProps) => {

    const [price, setPrice] = useState<string>("0.0");
    const [tag, setTag] =  useState<string>("");
    const imageRef = useRef<HTMLInputElement>(null);
    let modal = document.getElementById(props.modalName);

    const setValue = (e: React.ChangeEvent<HTMLInputElement> , field:String) => {
        let copyProduct = Object.assign({}, props.product);
        switch (field) {
            case "name":
                copyProduct.name=e.target.value;
                break;
            case "description":
                copyProduct.description=e.target.value;
                break;
            case "tag":
                setTag(e.target.value);
                return;
            case "price":
                let price = e.target.value.replace(".",".");
                console.log(price.split(".")[1])
                if (price.split(".")[1] === undefined || price.split(".")[1].length < 3){
                    setPrice(price);
                    copyProduct.price = Number(price);
                }

                break;
        
        }
        props.setProduct(copyProduct)
    }

    const clean = () => {
        props.setProduct(emptyProduct);
        setPrice("0.0");
        setTag("");
        if(imageRef.current != null) imageRef.current.value = "";
    }

    useEffect(()=>{
        modal?.addEventListener('hidden.bs.modal', function () {
            clean();
        })
    }, [modal])

    const updateTags = () => {
        let copyProduct = Object.assign({}, props.product);
        copyProduct.tags?.push(tag);
        props.setProduct(copyProduct);
    }
    
    
    function deleteTag(id:number): void {
        let copyProduct = Object.assign({}, props.product);
        copyProduct.tags?.splice(id, 1);
        props.setProduct(copyProduct);
    }

    function save(): void {
        props.newProduct()
        $('#'+props.modalName).modal('hide');
        clean();
    }

    return (
        <div className="modal fade" id={props.modalName} tabIndex={-1} aria-labelledby={props.modalName+"Label"} aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h5 className="modal-title" id={props.modalName+"Label"}>Añadir producto</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                            <div className="edit-product-form text-start">  
                                <span  className="" >Nombre</span >
                                <div className='input-group mb-2'>
                                    <input onChange={(e) => setValue(e, "name")} value={props.product.name} className='form-control' type="text" />
                                </div>
                                <span className="" >Descripcion</span >
                                <div className='input-group mb-2'>
                                    <input onChange={(e) => setValue(e, "description")}  value={props.product.description} className='form-control' type="text" />
                                </div>
                                <span className="" >Precio</span >
                                <div className='input-group mb-2'>
                                    <input onChange={(e) => setValue(e, "price")} step={0.01} value={price} className='form-control' type="number" />
                                </div>
                                <span className="" >Imagen</span >
                                <div className='input-group mb-2'>
                                    <input ref={imageRef} className='form-control' onChange={(e) => props.uploadImage(e)} type="file" accept="image/png, image/jpeg"/>
                                </div>
                                <span className="" >Etiqueta</span >
                                <div className='input-group mb-2'>
                                    <input onChange={(e) => setValue(e, "tag")}  value={tag} className='form-control' type="text" aria-describedby="button-addon2"/>
                                    <button className="btn btn-outline-secondary" onClick={updateTags}>+</button>
                                </div>
                            </div>
                                {props.product.tags?props.product.tags.map((tag,id )=> 
                                    <div key={id} className="tag">
                                        {tag}
                                        <button className="btn btn-ligh" onClick={() => deleteTag(id)}>-</button>
                                    </div>
                                ):<></>}
                            </div>
                            <div className="modal-footer">
                            <button className="btn" type="button" data-bs-dismiss="modal" aria-label="Close">Cancelar</button>
                            <button type="button" onClick={save} className="btn btn-dark">guardar cambios</button>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default ProductModal;