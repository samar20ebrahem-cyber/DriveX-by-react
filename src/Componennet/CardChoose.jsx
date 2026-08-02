import choose from "../data/Choose.js";
<div className="countainer">
    {
        choose.map((cars) =>
          <div className="card" key={cars.id}>
             <img src={cars.img} alt={cars.name} />
             <h2>{cars.name}</h2>
             <p>{cars.desc}</p>
          </div>
        )
    }
</div>