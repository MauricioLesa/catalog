import { ProductCard } from "./ProductCard"
import "./ProductList.css"
import { useGetProductList } from "./UseGetProductList"


export const ProductList = () => {
    const [productList, ] = useGetProductList();

    return (
        <div className="w-100 mt-5 pb-5  d-flex flex-column">
            <input className="px-2 mb-3 py-1 mx-auto product-search w-75" type="text" placeholder="buscar"/>
            <div className="mx-auto">
                {productList.map( (product,key) => (
                    <ProductCard product={product} key={key}/>
                ))}
            </div>
        </div>
    )
}