import { useState } from "react";
import { editProductAPI, Product, saveNewProduct } from "../APIs/ProductAPI";
import StoreProductsDisplay from "./StoreProductsDisplay";
import { useGetProductListByStore } from "./UseGetProcutListByStore";


export const emptyProduct = {
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

    const newProduct = async () => {
        let [response,status] = await saveNewProduct(
            product,
            image
        )

        if (status === 200){
            setProduct(emptyProduct)
            updateData();
        }
    }

    const editProduct = async (id:number) => {
        console.log(product);
        console.log(data[id]);
        let [response,status]  = await editProductAPI(
            product,
            image
        )
        
        if (status === 200){
            setProduct(emptyProduct)
            updateData();
        }
    }

    return(
      <StoreProductsDisplay product={product} editProduct={editProduct} setProduct={setProduct} uploadImage={uploadImage} newProduct={newProduct}   productList = {data}/>
        
    )
}

export default StoreProducts;