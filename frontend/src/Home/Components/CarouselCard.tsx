import { Product } from "../../APIs/ProductAPI"

type CarouselCardProps = {
    item: Product
}

const CarouselCard = (props:CarouselCardProps) => {
    console.log(props);
    return (
        <div className="d-flex align-items-center h-100">
            <img width="300px" height="300px" src={`data:image/jpeg;base64,${props.item.img}`}/>
            <div className="px-5">
                <h3>{props.item.name}</h3>
                <span>{props.item.description}</span>
                <span>{props.item.price}</span>
            </div>
        </div>
    )
}

export default CarouselCard