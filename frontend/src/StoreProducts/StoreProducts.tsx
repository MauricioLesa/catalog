import { useState } from "react";
import { editProductAPI, Product, saveNewProduct } from "../APIs/ProductAPI";
import StoreProductsDisplay from "./StoreProductsDisplay";
import { useGetProductListByStore } from "./UseGetProcutListByStore";


export const emptyProduct = {
    id:-1,
    image: "",
    name: "",
    price: 0,
    description: "",
    tags:[]
}

const StoreProducts = () => {

    const [data,updateData] = useGetProductListByStore();
    const [image, setImage] = useState<FormData|null>(null);
    const [product, setProduct] = useState<Product>(emptyProduct);

    const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files != null){
            const formData = new FormData(); 
            formData.append('image', e.target.files[0]);
            console.log(formData.get("image"));
            setImage(formData);
        }
    }

    const clearImage = () => setImage(null);

    const newProduct = async () => {
        let [,status] = await saveNewProduct(
            product,
            image
        )

        if (status === 200){
            setProduct(emptyProduct)
            updateData();
        }
    }

    const editProduct = async () => {
        let [,status]  = await editProductAPI(
            product,
            image
        )


        
        if (status === 200){
            setProduct(emptyProduct)
            updateData();
        }
    }

    return(
      <StoreProductsDisplay product={product} clearImage={clearImage} editProduct={editProduct} setProduct={setProduct} uploadImage={uploadImage} newProduct={newProduct}   productList = {data}/>
        
    )
}

export default StoreProducts;