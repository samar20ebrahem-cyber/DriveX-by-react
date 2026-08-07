import bmwImage from "../assets/images/car1.jpg";
import lamboImage from "../assets/images/car2.jpg";
import porscheImage from "../assets/images/car3.jpg";
import ferrariImage from "../assets/images/car4.jpg";
import mercedesImage from "../assets/images/car5.jpg";
import audiImage from "../assets/images/car6.jpg";

const cars =[
    {
    id:'1',
   name: 'BMW M4 Competition',
   price: "$84,900",
   speed: "503 HP",
   horsePower: "290 km/h",
   image: bmwImage,
   category: "Coupe"
    },
     {
    id:'2',
   name: 'Lamborghini Huracán EVO',
   price: "$261,000",
   speed: " 631 HP",
   horsePower: "325 km/h",
   image: lamboImage,
   category: "Supercar",
    },
     {
    id:'3',
   name: 'Porsche 911 Turbo S',
   price: "$230,400",
   speed: "640 HP ",
   horsePower: "330 km/h",
   image: porscheImage,
   category: "Sports",
    },
     {
    id:'4',
   name: 'Ferrari SF90 Stradale',
   price: "$507,000",
   speed: " 986 HP",
   horsePower: "340 km/h",
   image: ferrariImage,
   category: "Hypercar",
    },
     {
    id:'5',
   name: 'Mercedes AMG GT',
   price: "$118,600",
   speed: "577 HP",
   horsePower: "318 km/h",
   image: mercedesImage,
   category: "GT",
    },
     {
    id:'6',
   name: 'Audi R8',
   price: "$158,600",
   speed: " 602 HP",
   horsePower: "331 km/h",
   image: audiImage,
   category: "Supercar",
    },
]
export default cars