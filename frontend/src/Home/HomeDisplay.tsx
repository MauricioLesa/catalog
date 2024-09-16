import { ProductCarousel } from "./Components/ProductCarousel"
import { ProductList } from "./Components/ProductList"
import { TagsMenu } from "./Components/TagsMenu"

export const HomeDisplay = () => {
    return (
        <section className="w-100 flex-column d-flex align-items-center ">
            <ProductCarousel/>
            <TagsMenu/>
            <ProductList/>

        </section>
    )
}