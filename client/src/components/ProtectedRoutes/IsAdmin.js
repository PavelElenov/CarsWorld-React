import { useContext, Fragment } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import Unauthorized from "../Unauthorized";

const IsAdmin = () => {
    const {user} = useContext(UserContext);

    return (
        <Fragment>
            {user ? user.isAdmin ? <Outlet /> : <Unauthorized /> : <Unauthorized/>}
        </Fragment>
    );
};

export default IsAdmin;