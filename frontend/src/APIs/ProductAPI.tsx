import { HEADERS,GETHEADERS, IMAGEHEADERS } from "./Config";

export interface Product {
    id?: number,
    image?: string,
    name: string,
    price: number,
    description: string,
    tags?: string[]
}


export const saveNewProduct = async (newProduct: Product, image:FormData|null):Promise<[Promise<any> | undefined, number]> => {

    try {
        if (image == null) return [undefined,500];
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

        const content:Promise<any> =  await response.json();
        return [content, response.status];
    }
    catch (err) {
        console.log(err, "error loading the product");
        return [undefined, 500];
    }
}

export const productStoreListAPI = async () => {

    try {
        const response:Response = await fetch('http://localhost:8080/product/product-store-list?'
            ,{
                method: "GET",
                mode: 'cors',
                credentials: 'include',
                headers: GETHEADERS,
            });

        const content =  await response.json();
        return(content.products);
    }
    catch (err) {
        console.log(err, "error loading the product");
    }
}

export const editProductAPI = async (product: Product, image:FormData|null):Promise<[Promise<any> | undefined, number]> => {

    try {
        if(image != null) {
        const imgPath:Response = await fetch('http://localhost:8080/image/save'
            ,{
                method: "POST",
                mode: 'cors',
                credentials: 'include',
                headers: IMAGEHEADERS,
                body:image
            });

        const res =  await imgPath.json();
        product.image = res.img_path;
        }
        
        const response:Response = await fetch('http://localhost:8080/product/update'
            ,{
                method: "PUT",
                mode: 'cors',
                credentials: 'include',
                headers: HEADERS,
                body:JSON.stringify(product)
            });

        const content:Promise<any> =  await response.json();
        return [content, response.status];
    }
    catch (err) {
        console.log(err, "error loading the product");
        return [undefined, 500];
    }
}