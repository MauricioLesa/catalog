import { useGetTopProducts } from "./Components/useGetTopProducts"
import { HomeDisplay } from "./HomeDisplay"

export const Home = () => {

    const [topProduct, ] = useGetTopProducts();


    return (
        <>
            <HomeDisplay topProducts={topProduct}/>
        </>
    )
}