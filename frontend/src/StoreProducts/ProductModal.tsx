import { useEffect, useState } from "react";
import { Product } from "../APIs/ProductAPI";


interface ProductModalProps{
    product:Product,
    modalName:string,
    newProduct:() => Promise<void>,
    uploadImage: (e: React.ChangeEvent<HTMLInputElement>) => void,
    setProduct: React.Dispatch<React.SetStateAction<Product>>
}


const ProductModal = (props:ProductModalProps) => {

    const [price, SetPrice] = useState<string>("0.0");
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
            case "price":
                SetPrice(e.target.value.replace(",","."));
                console.log(parseFloat(e.target.value));
                copyProduct.price = parseFloat(e.target.value.replace(",","."));
                break;
        
        }
        props.setProduct(copyProduct)
    }

    useEffect(()=>{
        modal?.addEventListener('hidden.bs.modal', function (event) {
            console.log("close");
            props.setProduct({
                image: "",
                name: "",
                price: 0.0,
                description: ""
            })
        })
    }, [modal])
    
    
    return (
        <div className="modal fade" id={props.modalName} tabIndex={-1} aria-labelledby={props.modalName+"Label"} aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h5 className="modal-title" id={props.modalName+"Label"}>Añadir producto</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                            <form className="edit-product-form text-start">  
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
                                    <input onChange={(e) => setValue(e, "price")} value={price} className='form-control' type="number" />
                                </div>
                                <span className="" >Imagen</span >
                                <div className='input-group mb-2'>
                                    <input className='form-control' onChange={(e) => props.uploadImage(e)} type="file" accept="image/png, image/jpeg"/>
                                </div>
                            </form>
                            </div>
                            <div className="modal-footer">
                            <button className="btn" type="button" data-bs-dismiss="modal" aria-label="Close">Cancelar</button>
                            <button type="button" onClick={props.newProduct} className="btn btn-dark">guardar cambios</button>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default ProductModal;