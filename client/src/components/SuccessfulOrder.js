import { useNavigate } from "react-router-dom";

const SuccessfulOrder = () => {
    const navigate = useNavigate();

    const continueShopping = () => {
        navigate("/cars");
    }

    return (
        <div id="orderPage">
            <div className="order">
                <i className="fa-regular fa-circle-check"></i>
                <p>Success!</p>
                <p>Yay, it's a nice order!</p>
                <p>It will arrive soon.</p>
                <button onClick={continueShopping}>Continue Shopping</button>
            </div>
        </div>
    );
};

export default SuccessfulOrder;