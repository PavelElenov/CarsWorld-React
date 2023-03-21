import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { get, put, remove } from "../services/requests";
import { UserContext } from "../contexts/UserContext";
import { Fragment } from "react";
import { UserItemsContext } from "../contexts/UserItemsContext";

const Details = () => {
    const [car, setCar] = useState(null);
    const { id } = useParams();
    const { user } = useContext(UserContext);
    const { addItem, items } = useContext(UserItemsContext);
    const navigate = useNavigate();
    const isCarBought = car && items.filter(item => item._id == car._id && true);

    useEffect(() => {
        get(`/cars/car/${id}`).then(data => setCar(data));
    }, []);

    const deleteCar = async () => {
        alert("Are you sure, you want to delete this car?")
        await remove(`/cars/car/${id}`).then(navigate("/cars"));
    }

    const buyCar = async () => {
        await put(`/cars/car/${id}`, user.id);
        addItem(id, "car")
        navigate("/cars");
    }

    return (
        <Fragment>
            {car ?
                <div id="car-details">
                    <div className="car-content">
                        <p className="car-content__header">Details</p>
                        <div className="img">
                            <img src={car.img} alt="" />
                        </div>
                        <p><span>Brand:</span> {car.brand}</p>
                        <p><span>Model:</span> {car.model}</p>
                        <p><span>Price:</span> {car.price.toLocaleString("en-US")}лв.</p>
                        <p><span>Description:</span></p>
                        <p>{car.description}</p>

                        {user && user.isAdmin ?
                            <div className="buttons">
                                <Link to={`/edit-car/${car._id}`} className="primary-button">Edit</Link>
                                <button className="primary-button" onClick={deleteCar}>Delete</button>
                            </div> :
                            <div className="buy">
                                {
                                    isCarBought.length > 0 ?
                                        <span className="primary-button">You already bought this car</span>
                                        :
                                        <button className="primary-button" onClick={buyCar}>Buy</button>
                                }

                            </div>
                        }
                    </div>
                </div> :
                <p>Loading...</p>
            }
        </Fragment>
    );
};

export default Details;