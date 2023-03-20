import { useContext, Fragment} from "react";
import { remove } from "../services/requests";
import CarItem from "./CarItem";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { UserItemsContext } from "../contexts/UserItemsContext";

const Cart = () => {
    const { user } = useContext(UserContext);
    const {items, deleteItem, deleteAllItems, totalPrice} = useContext(UserItemsContext);
    const navigate = useNavigate();

    const deleteItemHandler = async (item) => {
        await remove(`/cart/${user.id}`, item);
        deleteItem(item._id);
    }

    const buyAllProducts = async () => {
        await remove(`/cart/all/${user.id}`).then(deleteAllItems()).then(navigate("/successfulOrder"));
    }

    return (
        <div id="cart">
            <section className="cart-content">
                {items.length > 0 ?
                    <Fragment>
                        <p className="cart-content__header">Your cart ({items.length} {items.length > 1 ? "products" : "product"})</p>
                        <div className="item-content">
                            <div className="items">
                                {items.map(item => <CarItem key={item._id} item={item} deleteItemHandler={deleteItemHandler} />)}
                            </div>
                            <div className="total-price">
                                <p>Order value</p>
                                <p><span>Price:</span> <span>{totalPrice.toLocaleString("en-US")}лв.</span></p>
                                <p><span>Delivery:</span> <span className="delivery">Free</span></p>
                                <p><span>Total:</span> <span className="total">{totalPrice.toLocaleString("en-US")}лв.</span></p>
                                <button className="primary-button" onClick={buyAllProducts}>Buy</button>
                            </div>
                        </div>

                    </Fragment>
                    :
                    <p className="cart-content__header">Your cart is empty</p>
                }
            </section>
        </div>
    );
};

export default Cart;