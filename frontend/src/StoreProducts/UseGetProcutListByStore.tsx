import { useEffect, useState } from "react";
import { Product, productStoreListAPI } from "../APIs/ProductAPI";



export const useGetProductListByStore = (): [Product[],() => Promise<void>]  =>{

    const [list, setList] = useState<Product[]>([]);
    
    const loadList = async () => {
        const res = await productStoreListAPI();
        console.log(res);
        if(res) setList(res);
    }
    
    useEffect(() => {
        loadList();
    },[])
    

    return [list, loadList];

}