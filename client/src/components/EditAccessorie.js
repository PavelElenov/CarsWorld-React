const EditAccessorie = () => {
    return (
        <div className="forms-content accessorie-forms">
            <form>
                <p>Edit Accessorie</p>
                <div>
                    <label htmlFor>Name:</label>
                    <input type="text" name="accessorieName" />
                </div>
                <div>
                    <label htmlFor>Price:</label>
                    <input type="number" name="price" />
                </div>
                <button className="primary-button">Edit</button>
            </form>
        </div>
    );
};
export default EditAccessorie;