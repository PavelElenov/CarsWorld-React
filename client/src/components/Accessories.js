import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Accessories = () => {
    const {user} = useContext(UserContext);

    return (
        <div id="accessories">
            {user && user.isAdmin && <Link to="/add-accessorie" className="add primary-button">Add Accessorie +</Link>}
            <section className="accessories__header">
                <p>Избрани продукти</p>
            </section>
            <section className="accessories">
                <div className="accessorie">
                    {user && user.isAdmin && <Link to="/edit-accessorie/1"><i class="fa-solid fa-pen"></i></Link>}
                    <div className="accessorie-img">
                        <img src="https://store.silverstar.bg/storage/products/1654505173-183491.jpg" alt="" />
                    </div>
                    <div className="accessorie-content">
                        <p className="accessorie_header">T-Shirt</p>
                        <p className="accessorie_price">230.30lv</p>
                        {user && <button className="primary-button">Buy</button>}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Accessories;