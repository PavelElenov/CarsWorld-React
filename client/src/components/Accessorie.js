import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { put, remove } from "../services/requests";

const Accessorie = ({ accessorie, removeAccessoriFromState }) => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const buyAccessorie = () => {
        put(`/accessories/accessorie/${accessorie._id}`, user.id).then(navigate("/cart"));
    }

    const deleteAccessorie = () => {
        alert("Are you sure, you want to delete this accessorie?");
        remove(`/accessories/accessorie/${accessorie._id}`).then(removeAccessoriFromState(accessorie.name));
    }

    return (
        <div className="accessorie">
            {user && user.isAdmin &&
                <Fragment>
                    <Link to={`/edit-accessorie/${accessorie._id}`}><i className="fa-solid fa-pen"></i></Link>
                    <span onClick={deleteAccessorie}><i className="fa-solid fa-trash"></i></span>
                </Fragment>
            }
            <div className="accessorie-img">
                <img src={accessorie.img} alt="" />
            </div>
            <div className="accessorie-content">
                <p className="accessorie_header">{accessorie.name}</p>
                <p className="accessorie_price">{accessorie.price.toLocaleString("en-US")}лв.</p>
                {user && user.isAdmin === false && <button className="primary-button" onClick={buyAccessorie}>Buy</button>}
            </div>
        </div>
    );
};

export default Accessorie;