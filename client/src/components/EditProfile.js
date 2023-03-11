const EditProfile = () => {
    return (
        <div id="edit-profile">
            <form action className="edit-profile">
                <p>Edit Profile</p>
                <div className="content">
                    <div>
                        <label htmlFor>Username:</label>
                        <input type="text" name="username" defaultValue="PavelElenov" />
                    </div>
                    <div>
                        <label htmlFor>Email:</label>
                        <input type="text" name="email" />
                    </div>
                    <div>
                        <label htmlFor>Image:</label>
                        <input type="text" name="img-url" />
                    </div>
                    <button className="primary-button">Edit</button>
                </div>
            </form>
        </div>
    );
};

export default EditProfile;