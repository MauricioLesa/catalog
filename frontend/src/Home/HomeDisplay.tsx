import { Product } from "../APIs/ProductAPI"
import { ProductCarousel } from "./Components/ProductCarousel"
import { ProductList } from "./Components/ProductList"
import { TagsMenu } from "./Components/TagsMenu"
import "./HomeDisplay.css"

type homeProps = {
    topProducts:Product[],
}

export const HomeDisplay = (props:homeProps) => {
    return (
        <section className="w-100 home-display flex-column d-flex align-items-center">
            <ProductCarousel list={props.topProducts}/>
            <TagsMenu/>
            <ProductList/>
        </section>
    )
}