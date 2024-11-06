import { useParams } from "react-router"
import { Product } from "../APIs/ProductAPI"

export const ProductPage = () => {
    const param = useParams();
    console.log(param)
    return(
    <>
    <div>
        <div></div>
        <div>
            {param.productId}
        </div>
    </div>
    </>
    )
}