import { get } from "../services/requests";
import { Fragment } from "react";
import Accessorie from "./Accessorie";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";

const Accessories = () => {
    const { user } = useContext(UserContext);
    const [accessories, setAccessories] = useState(null);

    useEffect(() => {
        get("/accessories").then(data => setAccessories(data));
    }, []);

    const removeAccessoriFromState = (name) => {
        setAccessories(state => state.filter(accessorie => accessorie.name !== name && accessorie))
    }

    return (
        <Fragment>
            <div id="accessories">
                {user && user.isAdmin && <Link to="/add-accessorie" className="add primary-button">Add Accessorie +</Link>}
                <section className="accessories__header">
                    <p>Избрани продукти</p>
                </section>
                <section className="accessories">
                    {accessories && accessories.map(accessorie => <Accessorie key={accessorie._id} accessorie={accessorie} removeAccessoriFromState={removeAccessoriFromState}/>)}
                </section>
            </div>

        </Fragment>

    );
};

export default Accessories;