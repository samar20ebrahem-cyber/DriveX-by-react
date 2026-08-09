import cars from "../../data/cars.js";
import CarCard from "./CarCard.jsx";
import "./CarCards.css";

export function CarCards() {
    return (
        <div className="cars-container">
            {cars.map((car) => (
                <CarCard
                    key={car.id}
                    car={car}
                />
            ))}
        </div>
    );
}