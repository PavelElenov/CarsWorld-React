import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";

const Accessorie = ({ accessorie }) => {
    const { user } = useContext(UserContext);

    return (
        <div className="accessorie">
            {user && user.isAdmin && <Link to={`/edit-accessorie/${accessorie._id}`}><i class="fa-solid fa-pen"></i></Link>}
            <div className="accessorie-img">
                <img src={accessorie.img} alt="" />
            </div>
            <div className="accessorie-content">
                <p className="accessorie_header">{accessorie.name}</p>
                <p className="accessorie_price">{accessorie.price.toLocaleString("en-US")}лв.</p>
                {user && <button className="primary-button">Buy</button>}
            </div>
        </div>
    );
};

export default Accessorie;