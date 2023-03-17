import { useParams, useNavigate } from "react-router-dom";
import {useState, useEffect} from "react";
import { get, patch } from "../services/requests";


const EditAccessorie = () => {
    const {id} = useParams();
    const [accessorie, setAccessorie] = useState({
        name: "",
        price: "",
        img: "",
    });
    const navigate = useNavigate();

    useEffect(() => {
        get(`/accessories/accessorie/${id}`).then(data => setAccessorie(data));
    }, []);

    const changeHandler = (e) => {
        setAccessorie(state => ({...state, [e.target.name]: e.target.value}))
    }

    const editAccessorie = (e) => {
        e.preventDefault();
        patch(`/accessories/accessorie/${id}`, accessorie).then(navigate("/accessories"));
    }

    return (
        <div className="forms-content accessorie-forms">
            <form onSubmit={editAccessorie}>
                <p>Edit Accessorie</p>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={accessorie.name} onChange={changeHandler}/>
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" name="price" value={accessorie.price} onChange={changeHandler}/>
                </div>
                <div>
                    <label>Img:</label>
                    <input type="text" name="img" value={accessorie.img} onChange={changeHandler}/>
                </div>
                <button className="primary-button">Edit</button>
            </form>
        </div>
    );
};
export default EditAccessorie;