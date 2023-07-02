import React, {Fragment} from "react";

const Home  = () => {



    return (
        <Fragment>
            <div id="carouselExampleIndicators"  className="carousel slide mx-2 shadow carousel-fade position-sticky"
                 data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner rounded">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src={require('./photo1.jpg')} className="d-block w-100" style={{maxHeight:'70vh'}} alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={require('./photo2.jpg')} className="d-block w-100" style={{maxHeight:'70vh'}} alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={require('./photo3.jpg')} className="d-block w-100" style={{maxHeight:'70vh'}} alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </Fragment>
    )
}


export default Home