import { ProductCard } from "./ProductCard"
import "./ProductList.css"
import { useGetProductList } from "./UseGetProductList"
import { useGetTopTags } from "./UseGetTopTags"


export const ProductList = () => {
    const [tagtList, ] = useGetTopTags();
    const [productList, ] = useGetProductList();

    const addTag = (checked: boolean, id:number) => {
        if(checked) {
            console.log(id);
        }
    }

    return (
        <>
        <input className="mb-1 px-2 py-1 mt-5 product-search w-75" type="text" placeholder="buscar"/>
        <div className="w-75 d-flex">
            <div className="search-tag-box mb-4 w-25">
                <ul className="my-3 w-100">
                    {tagtList.map( (tag,id) => (
                        <li key={id} className="w-100 list-unstyled my-1 p-0 pe-3 d-flex text-center">
                            <span className="me-auto d-inline-block">{tag.name}</span>
                            <input className="ms-auto d-inline-block" onChange={e => addTag(e.target.checked, id)} type="checkbox"/>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-75 pb-5 mb-4 d-flex flex-column">
                <div className="mx-auto w-100">
                    {productList.map( (product,key) => (
                        <ProductCard product={product} key={key}/>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}