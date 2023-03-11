import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <div id="profile">
            <div className="profile-info">
                <p>Profile Details</p>
                {/* If prifile have img */}
                {/* <div class="img">
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
                    <Link to="/logout" className="primary-button">Logout</Link>
                    <Link to="/edit-profile/1" className="primary-button">Edit</Link>
                </div>
            </div>
        </div>
    );
};

export default Profile;