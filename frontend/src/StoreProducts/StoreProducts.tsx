import { useState } from "react";
import { NewProduct, saveNewProduct } from "../APIs/ProductAPI";
import StoreProductsDisplay from "./StoreProductsDisplay";

const data = [
    {
        name:"eval1 eval1 eval1 eval1 eval1",
        price:0.0,
        description:"desc1"
    },
    {
        name:"eval2",
        price:0.0,
        description:"desc2"
    },
    {
        name:"eval3",
        price:0.0,
        description:"desc3"
    },
]


const StoreProducts = () => {

    const [image, setImage] = useState<FormData>(new FormData());
    const [product, setProduct] = useState<NewProduct>(
        {image: "",
        name: "",
        price: 0.0,
        description: ""
        }
    );

    const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files != null){
            const formData = new FormData(); 
            formData.append('image', e.target.files[0]);
            console.log(formData.get("image"));
            setImage(formData);
        }
    }

    const newProduct = async () => {
        await saveNewProduct(
            product,
            image
        )
    }

    return(
      <StoreProductsDisplay product={product} setProduct={setProduct} uploadImage={uploadImage} newProduct={newProduct}   productList = {data}/>
        
    )
}

export default StoreProducts;