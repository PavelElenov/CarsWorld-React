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
    const navigate = useNavigate()

    const changeHandler = (e) => {
        setData(state => ({ ...state, [e.target.name]: e.target.value }))
    };

    const submitHandler = (e) => {
        e.preventDefault();
        post("/cars", data).then(navigate("/cars"));
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
                    <input type="text" name="model" value={data.model} onChange={changeHandler} />
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
                    <input type="number" name="price" value={data.price} onChange={changeHandler} />
                </div>
                <div>
                    <label>Img:</label>
                    <input type="text" name="img" value={data.img} onChange={changeHandler} />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea name="description" id="description" rows={15} cols={30} onChange={changeHandler}>
                        {data.description}
                    </textarea>
                </div>
                <button className="primary-button">Create</button>
            </form>
        </div>
    );
};

export default AddCar;