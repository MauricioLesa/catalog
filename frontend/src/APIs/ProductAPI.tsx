import { HEADERS, IMAGEHEADERS } from "./Config";

export interface NewProduct {
    image: string
    name: string,
    price: number,
    description: string
}


export const saveNewProduct = async (newProduct: NewProduct, image:FormData) => {

    try {
        const imgPath:Response = await fetch('http://localhost:8080/image/save'
            ,{
                method: "POST",
                mode: 'cors',
                credentials: 'include',
                headers: IMAGEHEADERS,
                body:image
            });

        const path =  await imgPath.json();
        newProduct.image = path.img_path;

        const response:Response = await fetch('http://localhost:8080/product/save'
            ,{
                method: "POST",
                mode: 'cors',
                credentials: 'include',
                headers: HEADERS,
                body:JSON.stringify(newProduct)
            });

        const content =  await response.json();
        console.log(content);
    }
    catch (err) {
        console.log(err, "error loading the product");
    }
}