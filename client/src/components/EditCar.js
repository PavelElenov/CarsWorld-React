const EditCar = () => {
    return (
        <div className="forms-content">
            <form >
                <p>Edit Car</p>
                <div>
                    <label htmlFor>Brand:</label>
                    <input type="text" name="brand" defaultValue="Mercedes" />
                </div>
                <div>
                    <label htmlFor>Model:</label>
                    <input type="text" name="model" defaultValue="Maybach S-Class" />
                </div>
                <div>
                    <label htmlFor>Price:</label>
                    <input type="number" name="price" defaultValue="200.169" />
                </div>
                <div>
                    <label htmlFor>Img:</label>
                    <input type="text" name="img" defaultValue="http://ifahgafd.fdafjadifa" />
                </div>
                <div>
                    <label htmlFor>Description:</label>
                    <textarea name="description" id="description" rows={15} defaultValue={"The Mercedes Maybach S-Class is a luxury sedan that is designed to provide the ultimate driving\n                    experience for those who appreciate the finer things in life. This vehicle is the epitome of luxury,\n                    combining the elegance and sophistication of a Mercedes-Benz with the exclusivity and prestige of\n                    the Maybach brand.\n                    "} />
                </div>
                <button className="primary-button">Edit</button>
            </form>
        </div>
    );
};

export default EditCar;