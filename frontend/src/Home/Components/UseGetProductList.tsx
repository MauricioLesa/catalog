import { useEffect, useState } from "react";
import { Product, productListAPI } from "../../APIs/ProductAPI";

export const useGetProductList = (): [Product[],() => Promise<void>]  =>{

    const [list, setList] = useState<Product[]>([]);
    
    const loadList = async () => {
        const res = await productListAPI();
        if(res) setList(res);
    }
    
    useEffect(() => {
        loadList();
    },[])
    

    return [list, loadList];

}