import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { deleteItemFromLocalStorage } from "../utils/localStorageManagment";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const { logoutUser, user } = useContext(UserContext);
    const navigate = useNavigate();

    const logout = () => {
        deleteItemFromLocalStorage("auth");
        logoutUser();
        navigate("/");
    }

    return (
        <div id="profile">
            <div className="profile-info">
                <p>Profile Details</p>
                {user.img !== "" ?
                    <div className="img">
                        <img src={user.img} alt="" />
                    </div>
                    :
                    <div className="add-img">
                        <span>{user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase()}</span>
                    </div>
                }
                <section className="user-data">
                    <div>
                        <span>First Name *</span>
                        <p>{user.firstName}</p>
                    </div>
                    <div>
                        <span>Last Name *</span>
                        <p>{user.lastName}</p>
                    </div>
                    <div>
                        <span>Email *</span>
                        <p>{user.email}</p>
                    </div>
                </section>
                <div className="buttons">
                    <button className="primary-button" onClick={logout}>Logout</button>
                    <Link to={`/edit-profile/${user.id}`} className="primary-button">Edit</Link>
                </div>
            </div>
        </div>
    );
};

export default Profile;