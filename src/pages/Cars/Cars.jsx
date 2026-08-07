export function Cars() {
    return (

        <>
            <section className="cars-section">

                <div className="cars-heading">

                    <div className="cars-title">
                        <p>FEATURED COLLECTION</p>

                        <h2>
                            Icons of the <span>Road</span>
                        </h2>
                    </div>

                    <p className="cars-description">
                        Hand-picked masterpieces from Stuttgart to Sant'Agata
                        Bolognese — each built to redefine what driving means.
                    </p>

                </div>
                <div className="cars-container">
                {
                    cars.map((car) =>(
                           < CarCard  key={car.id} car={car}/>
                    ))
                }
                </div>
              
            </section>
           
        </>
    )
}
import './Cars.css'
import CarCard from '../../Componennet/CarCards/CarCard.jsx'
import cars from "../../data/cars";