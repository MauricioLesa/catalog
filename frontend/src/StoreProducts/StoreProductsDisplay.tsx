import { useState } from "react";
import "./StoreProducts.css";

interface StoreProductsProps{
    productList:{ name: string; price: number; description: string; }[],
}


const StoreProductsDisplay =  (props:StoreProductsProps) => { 
    const [disabled, setDisabled] = useState<boolean>(true);
    const [image, setImage] = useState<FormData>();

    const getFileInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files != null){
            console.log('File info working!')
            console.log(e.target.files[0]);
            const formData = new FormData(); 
            formData.append('my-image-file', e.target.files[0], e.target.files[0].name);
            setImage(formData);
        }
    }

    const test = async () => {
        const response:Response = await fetch('http://localhost:8080/product/save', {
            method: "GET",
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Access-Control-Allow-Credentials':'*',
                "Access-Control-Allow-Origin":'*',
                'SameSite': 'None',
            }
        });
        const content =  await response.json();
        console.log(content);
    }
    
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

                <div className="modal fade" id="ProductAddModal" tabIndex={-1} aria-labelledby="ProductAddModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h5 className="modal-title" id="ProductAddModalLabel">Añadir producto</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                            <form className="add-product-form text-start">  
                                <span  className="" >Nombre</span >
                                <div className='input-group mb-2'>
                                    <input className='form-control' type="text" />
                                </div>
                                <span className="" >Descripcion</span >
                                <div className='input-group mb-2'>
                                    <input className='form-control' type="text" />
                                </div>
                                <span className="" >Precio</span >
                                <div className='input-group mb-2'>
                                    <input className='form-control' type="text" />
                                </div>
                                <span className="" >Imagen</span >
                                <div className='input-group mb-2'>
                                    <input className='form-control' onChange={(e) => getFileInfo(e)} type="file" accept="image/png, image/jpeg"/>
                                </div>
                            </form>
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" onClick={test} className="btn btn-dark">guardar cambios</button>
                            </div>
                        </div>
                    </div>
                </div>
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