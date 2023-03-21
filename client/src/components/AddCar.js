import { useState } from "react";
import { post } from "../services/requests";
import { useNavigate } from "react-router-dom";

const AddCar = () => {
    const [data, setData] = useState({
        brand: "Mercedes",
        model: "",
        price: '',
        img: '',
        description: "",
        engineType: "Electrical",
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const changeHandler = (e) => {
        setData(state => ({ ...state, [e.target.name]: e.target.value }))
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const haveError = checkForErrors();
        
        if(!haveError){
            post("/cars", data).then(navigate("/cars"));
        }
    };

    const checkForErrors = () => {
        const haveError = Object.keys(data).find(key => data[key] == "") || Object.keys(errors).find(key => errors[key] !== "") && true;
       
        if(haveError){
            Object.keys(data).map(key => data[key] == "" && setErrors(state => ({...state, [key]: `${key.charAt(0).toUpperCase() + key.slice(1)} is required`})));
        }   

        return haveError ? true : false;
    }

    const blurHandler = (e) => {
        switch(e.target.name){
            case "model":
                e.target.value.length < 2 ? setErrors(state => ({...state, [e.target.name]:"Model must be at least 2 characters"})) :
                setErrors(state => ({...state, [e.target.name]: ""}));
                break;
            case "price":
                e.target.value < 0 ? setErrors(state => ({...state, [e.target.name]: "Price can not be negative number or zero"})) :
                setErrors(state => ({...state, [e.target.name]: ""}));
                break;
            case "description":
                e.target.value.length < 30 ? setErrors(state => ({...state, [e.target.name]:"Description must be at least 30 characters"})) :
                setErrors(state => ({...state, [e.target.name]: ""}));
                break;
            case "img":
                e.target.value.split("://")[0] !== "http" && e.target.value.split("://")[0] !== "https" ? setErrors(state => ({...state, [e.target.name]: "Img url must start with https or http"})) :
                setErrors(state => ({...state, [e.target.name]: ""}));
                break;
        }
    }


    return (
        <div className="forms-content">
            <form onSubmit={submitHandler}>
                <p>Create Car</p>
                <div>
                    <label>Brand:</label>
                    <select name="brand" value={data.brand} onChange={changeHandler}>
                        <option value="Mercedes">Mercedes</option>
                        <option value="BMW">BMW</option>
                        <option value="Audi">Audi</option>
                    </select>
                </div>
                <div>
                    <label>Model:</label>
                    <input type="text" name="model" value={data.model} onChange={changeHandler} onBlur={blurHandler}/>
                    {errors.model && <span className="error">{errors.model}</span>}
                </div>
                <div>
                    <label>EngineType:</label>
                    <select name="engineType" value={data.engineType} onChange={changeHandler}>
                        <option value="Electrical">Electrical</option>
                        <option value="Gasoline">Gasoline</option>
                        <option value="Diesel">Diesel</option>
                    </select>
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" name="price" value={data.price} onChange={changeHandler} onBlur={blurHandler}/>
                    {errors.price && <span className="error">{errors.price}</span>}
                </div>
                <div>
                    <label>Img:</label>
                    <input type="text" name="img" value={data.img} onChange={changeHandler} onBlur={blurHandler}/>
                    {errors.img && <span className="error">{errors.img}</span>}
                </div>
                <div>
                    <label>Description:</label>
                    <textarea name="description" id="description" rows={15} cols={30} value={data.description} onChange={changeHandler} onBlur={blurHandler}>
                    </textarea>
                    {errors.description && <span className="error">{errors.description}</span>}
                </div>
                <button className="primary-button">Create</button>
            </form>
        </div>
    );
};

export default AddCar;