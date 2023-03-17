
import { useState, useEffect } from "react";
import { Fragment } from "react";
import { get, patch } from "../services/requests";
import { useParams, useNavigate } from "react-router-dom";


const EditCar = () => {
    const [car, setCar] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        get(`/cars/car/${id}`).then(data => setCar(data));
    }, []);

    const changeHandler = (e) => {
        setCar(state => ({...state, [e.target.name]:e.target.value}))
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        await patch(`/cars/car/${id}`, car).then(navigate("/cars"));
    }

    return (
        <Fragment>
            {car && <div className="forms-content">
                <form onSubmit={submitHandler}>
                    <p>Edit Car</p>
                    <div>
                        <label>Brand:</label>
                        <select name="brand" value={car.brand} onChange={changeHandler}>
                            <option value="BMW">BMW</option>
                            <option value="Mercedes">Mercedes</option>
                            <option value="Audi">Audi</option>
                        </select>
                    </div>
                    <div>
                        <label>Model:</label>
                        <input type="text" name="model" value={car.model} onChange={changeHandler}/>
                    </div>
                    <div>
                        <label>Price:</label>
                        <input type="number" name="price" value={car.price} onChange={changeHandler}/>
                    </div>
                    <div>
                        <label>Img:</label>
                        <input type="text" name="img" value={car.img} onChange={changeHandler}/>
                    </div>
                    <div>
                        <label>Description:</label>
                        <textarea name="description" id="description" rows={15} onChange={changeHandler}>
                            {car.description}
                        </textarea>
                    </div>
                    <button className="primary-button">Edit</button>
                </form>
            </div>}
        </Fragment>
    );
};

export default EditCar;