import "./CarCard.css";

function CarCard({ car }) {
    return (
        <div className="card">

            <div className="card-image">
                <span className="category">{car.category}</span>

                <img src={car.image} alt={car.name} />
            </div>

            <div className="card-content">

                <div className="top">
                    <h2>{car.name}</h2>

                    <div className="price">
                        <p>From</p>
                        <h3>{car.price}</h3>
                    </div>
                </div>

                <div className="specs">

                    <div className="spec">
                        <i className="fa-solid fa-bolt"></i>
                        <span>{car.speed}</span>
                    </div>

                    <div className="spec">
                        <i className="fa-solid fa-gauge-high"></i>
                        <span>{car.horsePower}</span>
                    </div>

                </div>

                <button className="btn-details">
                    View Details
                </button>

            </div>

        </div>
    );
}

export default CarCard;