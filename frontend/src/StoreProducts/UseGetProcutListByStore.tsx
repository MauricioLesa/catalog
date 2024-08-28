import { useEffect, useState } from "react";
import { productStoreListAPI } from "../APIs/ProductAPI";



export const useGetProductListByStore = ():[] =>{

    const [list, setList] = useState<[]>([]);
    
    const loadList = async () => {
        const res = await productStoreListAPI();
        if(res) setList(res);
    }
    
    useEffect(() => {
        loadList();
    },[])
    

    return list;

}