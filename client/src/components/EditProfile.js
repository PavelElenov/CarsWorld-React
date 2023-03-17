import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { patch } from "../services/requests";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
    const {user, editUser} = useContext(UserContext);
    const [data, setData] = useState(user);
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setData(state => ({...state, [e.target.name]:e.target.value}));
    }

    const editProfile = () => {
        patch(`/user/${user.id}`, data).then(res => res.json()).then(newData => editUser(newData)).then(navigate("/profile"));
    }

    return (
        <div id="edit-profile">
            <form className="edit-profile" onSubmit={editProfile}>
                <p>Edit Profile</p>
                <div className="content">
                    <div>
                        <label>FirstName:</label>
                        <input type="text" name="firstName" value={data.firstName} onChange={changeHandler}/>
                    </div>
                    <div>
                        <label>LastName:</label>
                        <input type="text" name="lastName" value={data.lastName} onChange={changeHandler}/>
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="text" name="email" value={data.email} onChange={changeHandler}/>
                    </div>
                    <div>
                        <label>Image:</label>
                        <input type="text" name="img" value={data.img} placeholder={data.img  ? "" : "https://..."} onChange={changeHandler}/>
                    </div>
                    <button className="primary-button">Edit</button>
                </div>
            </form>
        </div>
    );
};

export default EditProfile;