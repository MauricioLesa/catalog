import { ProductCard } from "./ProductCard"
import "./ProductList.css"
import { useGetProductList } from "./UseGetProductList"


export const ProductList = () => {
    const [productList, ] = useGetProductList();

    return (
        <>
        <input className="mb-1 px-2 py-1 mt-5 product-search w-75" type="text" placeholder="buscar"/>
        <div className="w-75 d-flex">
            <div className="search-tag-box w-25">
                <ul>
                    <li className="">tag 1</li>
                    <li className="">tag 2</li>
                    <li className="">tag 3</li>
                    <li className="">tag 4</li>
                    <li className="">tag 5</li>
                </ul>
            </div>
            <div className="w-75 pb-5  d-flex flex-column">
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