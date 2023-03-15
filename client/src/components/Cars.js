import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { get } from "../services/requests";
import Car from "./Car";

const Cars = () => {
    const { user } = useContext(UserContext);
    const [cars, setCars] = useState(null);

    useEffect(() => {
        get("/cars").then(data => setCars(data));
    }, []);
    

    const changeBrands = (e, brandName) => {
        const span = document.getElementsByClassName("active-brand")[0];
        span.className = "";
        e.target.className = "active-brand";

        const div = document.querySelector(".active-cars");
        div.className = div.className.replace(" active-cars", "");

        document.querySelector(`.${brandName}`).className += " active-cars";
    }

    return (
        <div id="cars">
            {user && user.isAdmin && <Link to="/add-car" className="add primary-button">Add Car +</Link>}

            <section className="cars-page">
                <h1 className="cars__header">Our cars</h1>
                <p className="choose">Choose Brand</p>
                <div className="cars-content">
                    <div className="brands">
                        <ul>
                            <li>
                                <span className="active-brand" onClick={(e) => changeBrands(e, 'bmw')}>BMW</span>
                            </li>
                            <li>
                                <span onClick={(e) => changeBrands(e, 'mercedes')}>Mercedes</span>
                            </li>
                            <li>
                                <span onClick={(e) => changeBrands(e, 'audi')}>Audi</span>
                            </li>
                        </ul>
                    </div>
                    <div className="cars">
                        <div className="bmw active-cars">
                            { cars ? cars.bmw.map(car => <Car key={car._id} car={car}/>) : <p>Loading...</p>}
                        </div>
                        <div className="mercedes">
                            { cars ? cars.mercedes.map(car => <Car key={car._id} car={car}/>) : <p>Loading...</p>}
                        </div>
                        <div className="audi">
                            { cars ? cars.audi.map(car => <Car key={car._id} car={car}/>) : <p>Loading...</p>}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cars;