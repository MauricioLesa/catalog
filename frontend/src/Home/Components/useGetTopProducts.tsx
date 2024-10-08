import { useEffect, useState } from "react";
import { Product, topProductListAPI } from "../../APIs/ProductAPI";

export const useGetTopProducts = (): [Product[],() => Promise<void>]  =>{

    const [list, setList] = useState<Product[]>([]);
    
    const loadList = async () => {
        const res = await topProductListAPI();
        if(res) setList(res);
    }
    
    useEffect(() => {
        loadList();
    },[])
    

    return [list, loadList];

}