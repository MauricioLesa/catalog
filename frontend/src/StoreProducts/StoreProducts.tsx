import StoreProductsDisplay from "./StoreProductsDisplay";

const data = [
    {
        name:"eval1 eval1 eval1 eval1 eval1",
        price:0.0,
        description:"desc1"
    },
    {
        name:"eval2",
        price:0.0,
        description:"desc2"
    },
    {
        name:"eval3",
        price:0.0,
        description:"desc3"
    },
]


const StoreProducts = () => {



    return(
      <StoreProductsDisplay  productList = {data}/>
        
    )
}

export default StoreProducts;