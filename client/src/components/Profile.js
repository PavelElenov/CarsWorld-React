import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { deleteItemFromLocalStorage } from "../utils/localStorageManagment";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const {logoutUser} = useContext(UserContext);
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
                {/* If prifile have img */}
                {/* <div className="img">
                    <img src="" alt="">
                </div> */}
                <div className="add-img">
                    <span>PE</span>
                </div>
                <section className="user-data">
                    <div>
                        <span>First Name *</span>
                        <p>Pavel</p>
                    </div>
                    <div>
                        <span>Last Name *</span>
                        <p>Elenov</p>
                    </div>
                    <div>
                        <span>Email *</span>
                        <p>pavelelenov@gmail.com</p>
                    </div>
                </section>
                <div className="buttons">
                    <button className="primary-button" onClick={logout}>Logout</button>
                    <Link to="/edit-profile/1" className="primary-button">Edit</Link>
                </div>
            </div>
        </div>
    );
};

export default Profile;