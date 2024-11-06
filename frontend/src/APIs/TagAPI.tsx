import { GETHEADERS } from "./Config";

export type TagData =  {
    name:string,
}


export const topTagsAPI = async () => {
    try{
        const response:Response = await fetch('http://localhost:8080/tag/public/popularTags', {
            method: "GET",
            mode: 'cors',
            headers: GETHEADERS
        });
        const content =  await response.json();
        return content;
    }
    catch (error){
        if (error instanceof Error) console.log(error.message);
        
    }
}