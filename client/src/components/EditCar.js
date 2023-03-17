import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../services/requests";
import { Fragment } from "react";

const EditCar = () => {
    const [car, setCar] = useState(null);
    const [data, setData] = useState(
        {
            brand: "",
            model: "",
            price: "",
            engineType: "",
            img: "",
        }
    )
    const { id } = useParams();

    useEffect(() => {
        get(`/cars/details/${id}`).then(data => setCar(data));
    }, []);

    const changeHandler = (e) => {
        setData(state => ({...state, [e.target.name]: e.target.value}));
    };

    const editHandler = () => {
        
    }

    return (
        <Fragment>
            {car &&
                <div className="forms-content">
                    <form >
                        <p>Edit Car</p>
                        <div>
                            <label htmlFor>Brand:</label>
                            <option value={car.brand} onChange={changeHandler} name="brand">
                                <select value="BMW">BMW</select>
                                <select value="Mercedes">Mercedes</select>
                                <select value="Audi">Audi</select>
                            </option>
                        </div>
                        <div>
                            <label htmlFor>Model:</label>
                            <input type="text" name="model" value={car.model} onChange={changeHandler}/>
                        </div>
                        <div>
                            <label htmlFor>Price:</label>
                            <input type="number" name="price" value={car.price.toLocaleString("en-US")} onChange={changeHandler}/>
                        </div>
                        <div>
                            <label htmlFor>Img:</label>
                            <input type="text" name="img" value={car.img} />
                        </div>
                        <div>
                            <label htmlFor>Description:</label>
                            <textarea name="description" id="description" rows={15} value={car.description} onChange={changeHandler}/>
                        </div>
                        <button className="primary-button" onClick={editHandler}>Edit</button>
                    </form>
                </div>}
        </Fragment>

    );
};

export default EditCar;