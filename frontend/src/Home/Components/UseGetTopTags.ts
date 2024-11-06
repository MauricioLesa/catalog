import { useEffect, useState } from "react";
import { TagData, topTagsAPI } from "../../APIs/TagAPI";

export const useGetTopTags = (): [TagData[],() => Promise<void>]  =>{

    const [list, setList] = useState<TagData[]>([]);
    
    const loadList = async () => {
        const res = await topTagsAPI();
        if(res) setList(res);
    }
    
    useEffect(() => {
        loadList();
    },[])
    

    return [list, loadList];

}