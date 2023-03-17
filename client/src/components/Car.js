import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";

const Car = ({car}) => {
    const { user } = useContext(UserContext);
    
    return (
        <div className="car">
            <p className="car_info">{car.model}</p>
            <p className="car_info">{car.price.toLocaleString("en-US")}лв.</p>
            <p className="car_info"><span>{car.engineType}</span></p>
            <div className="car_img">
                <img src={car.img} alt="img" />
            </div>

            {user &&
                <div>
                    <Link to={`/details/${car._id}`} className="primary-button">Details</Link>
                </div>}

        </div>
    );
};

export default Car;