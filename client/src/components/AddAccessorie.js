import { useState } from "react";
import { post } from "../services/requests";
import { useNavigate } from "react-router-dom";

const AddAccessorie = () => {
    const [data, setData] = useState({
        name: "",
        price: '',
        img:'',
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const changeHandler = (e) => {
        setData(state => ({...state, [e.target.name]: e.target.value}));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const haveError = checkForErrors();

        if(!haveError){
            post("/accessories", data).then(navigate("/accessories"));
        }
    }

    const checkForErrors = () => {
        const haveError = Object.keys(data).find(key => data[key] == "") || Object.keys(errors).find(key => errors[key] !== "") && true;
        
        if(haveError){
            Object.keys(data).map(key => data[key] == "" && setErrors(state => ({...state, [key]: `${key.charAt(0).toUpperCase() + key.slice(1)} is required`})));
        }   

        return haveError ? true : false;
    }

    const blurHandler = (e) => {
        switch(e.target.name){
            case "name":
                e.target.value.length < 2 ? setErrors(state => ({...state, [e.target.name]:"Name must be at least 2 characters"})) :
                setErrors(state => ({...state, [e.target.name]: ""}));
                break;
            case "price":
                e.target.value < 0 ? setErrors(state => ({...state, [e.target.name]: "Price can not be negative number or zero"})) :
                setErrors(state => ({...state, [e.target.name]: ""}));
                break;
            case "img":
                e.target.value.split("://")[0] !== "http" && e.target.value.split("://")[0] !== "https" ? setErrors(state => ({...state, [e.target.name]: "Img url must start with https or http"})) :
                setErrors(state => ({...state, [e.target.name]: ""}));
                break;
        }
    }

    return (
        <div className="forms-content accessorie-forms">
            <form onSubmit={submitHandler}>
                <p>Create Accessorie</p>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={data.name} onChange={changeHandler} onBlur={blurHandler}/>
                    {errors.name && <span className="error">{errors.name}</span>}
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
                <button className="primary-button">Create</button>
            </form>
        </div>
    );
};

export default AddAccessorie;