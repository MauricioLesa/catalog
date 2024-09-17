import { ProductCarousel } from "./Components/ProductCarousel"
import { ProductList } from "./Components/ProductList"
import { TagsMenu } from "./Components/TagsMenu"
import "./HomeDisplay.css"

export const HomeDisplay = () => {
    return (
        <section className="w-100 home-display flex-column d-flex align-items-center">
            <ProductCarousel/>
            <TagsMenu/>
            <ProductList/>
                <>asdas</>
        </section>
    )
}