const AddCar = () => {
    return (
        <div className="forms-content">
            <form>
                <p>Create Car</p>
                <div>
                    <label htmlFor>Brand:</label>
                    <input type="text" name="brand" />
                </div>
                <div>
                    <label htmlFor>Model:</label>
                    <input type="text" name="model" />
                </div>
                <div>
                    <label htmlFor>Price:</label>
                    <input type="number" name="price" />
                </div>
                <div>
                    <label htmlFor>Img:</label>
                    <input type="text" name="img" />
                </div>
                <div>
                    <label htmlFor>Description:</label>
                    <textarea name="description" id="description" rows={15} cols={30}/>
                </div>
                <button className="primary-button">Create</button>
            </form>
        </div>
    );
};

export default AddCar;