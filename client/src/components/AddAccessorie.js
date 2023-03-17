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

    const changeHandler = (e) => {
        setData(state => ({...state, [e.target.name]: e.target.value}));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        post("/accessories", data).then(navigate("/accessories"));
    }

    return (
        <div className="forms-content accessorie-forms">
            <form onSubmit={submitHandler}>
                <p>Create Accessorie</p>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={data.name} onChange={changeHandler}/>
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" name="price" value={data.price} onChange={changeHandler}/>
                </div>
                <div>
                    <label>Img:</label>
                    <input type="text" name="img" value={data.img} onChange={changeHandler}/>
                </div>
                <button className="primary-button">Create</button>
            </form>
        </div>
    );
};

export default AddAccessorie;