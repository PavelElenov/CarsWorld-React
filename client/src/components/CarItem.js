const CarItem = ({ item, deleteItemHandler }) => {
    return (
        <div className="item-info">
            <div className="product-img">
                <img src={item.img} alt="" />
            </div>
            <p className="product-information">
                {item.brand ? item.model : item.name}
            </p>
            <table className="for-price">
                <tbody><tr>
                    <th>Price</th>
                </tr>
                    <tr>
                        <td>{item.price.toLocaleString("en-US")}лв.</td>
                    </tr>
                </tbody></table>
            <button className="secondary-button" onClick={() => deleteItemHandler(item)}>Delete</button>
        </div>
    );
};

export default CarItem;