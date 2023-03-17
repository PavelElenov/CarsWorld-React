import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const EditProfile = () => {
    const {user} = useContext(UserContext);
    const [data, setData] = useState(user);

    const changeHandler = (e) => {
        setData(state => ({...state, [e.target.name]:e.target.value}));
    }
    const editProfile = () => {
        // Make request with data
    }
    return (
        <div id="edit-profile">
            <form className="edit-profile" onSubmit={editProfile}>
                <p>Edit Profile</p>
                <div className="content">
                    <div>
                        <label htmlFor>FirstName:</label>
                        <input type="text" name="firstName" value={user.firstName} />
                    </div>
                    <div>
                        <label htmlFor>LastName:</label>
                        <input type="text" name="lastName" value={user.lastName} />
                    </div>
                    <div>
                        <label htmlFor>Email:</label>
                        <input type="text" name="email" value={user.email}/>
                    </div>
                    <div>
                        <label htmlFor>Image:</label>
                        <input type="text" name="img-url" value={user.img}/>
                    </div>
                    <button className="primary-button">Edit</button>
                </div>
            </form>
        </div>
    );
};

export default EditProfile;