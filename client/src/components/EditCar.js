<<<<<<< HEAD
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
=======
import { useState, useEffect } from "react";
import { Fragment } from "react";
import { get, patch } from "../services/requests";
import { useParams, useNavigate } from "react-router-dom";


const EditCar = () => {
    const [car, setCar] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
>>>>>>> b55379d452ba6cb760fae75c45705d3940f709b7

    useEffect(() => {
        get(`/cars/details/${id}`).then(data => setCar(data));
    }, []);

    const changeHandler = (e) => {
<<<<<<< HEAD
        setData(state => ({...state, [e.target.name]: e.target.value}));
    };

    const editHandler = () => {
=======
        setCar(state => ({...state, [e.target.name]:e.target.value}))
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        await patch(`/cars/edit-car/${id}`, car).then(navigate("/cars"));
>>>>>>> b55379d452ba6cb760fae75c45705d3940f709b7
        
    }

    return (
        <Fragment>
<<<<<<< HEAD
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

=======
            {car && <div className="forms-content">
                <form onSubmit={submitHandler}>
                    <p>Edit Car</p>
                    <div>
                        <label htmlFor>Brand:</label>
                        <select name="brand" value={car.brand} onChange={changeHandler}>
                            <option value="BMW">BMW</option>
                            <option value="Mercedes">Mercedes</option>
                            <option value="Audi">Audi</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor>Model:</label>
                        <input type="text" name="model" value={car.model} onChange={changeHandler}/>
                    </div>
                    <div>
                        <label htmlFor>Price:</label>
                        <input type="number" name="price" value={car.price} onChange={changeHandler}/>
                    </div>
                    <div>
                        <label htmlFor>Img:</label>
                        <input type="text" name="img" value={car.img} onChange={changeHandler}/>
                    </div>
                    <div>
                        <label htmlFor>Description:</label>
                        <textarea name="description" id="description" rows={15} onChange={changeHandler}>
                            {car.description}
                        </textarea>
                    </div>
                    <button className="primary-button">Edit</button>
                </form>
            </div>}
        </Fragment>
>>>>>>> b55379d452ba6cb760fae75c45705d3940f709b7
    );
};

export default EditCar;