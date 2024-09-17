import "./ProductCarousel.css"

export const ProductCarousel = () => {
    return (
        <div className="w-100 product-carousel bg-secondary">
            <div id="ProductCarousel" className="carousel slide h-100 w-50 m-auto" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="h-100 carousel-item active">
                        <div className="d-block w-100">1</div>
                    </div>
                    <div className="carousel-item h-100 ">
                        <div className="d-block  w-100">2</div>
                    </div>
                    <div className="carousel-item h-100 ">
                        <div className="d-block w-100">3</div>
                    </div>
                </div>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#ProductCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#ProductCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#ProductCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <button  className="carousel-control-prev" type="button" data-bs-target="#ProductCarousel" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button >
                <button  className="carousel-control-next" type="button" data-bs-target="#ProductCarousel" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button >
            </div>
        </div>
    )
}