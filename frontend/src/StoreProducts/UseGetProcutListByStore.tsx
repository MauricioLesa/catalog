import { useEffect, useState } from "react";
import { Product, productStoreListAPI } from "../APIs/ProductAPI";



export const useGetProductListByStore = ():Product[] =>{

    const [list, setList] = useState<Product[]>([]);
    
    const loadList = async () => {
        const res = await productStoreListAPI();
        if(res) setList(res);
    }
    
    useEffect(() => {
        loadList();
    },[])
    

    return list;

}