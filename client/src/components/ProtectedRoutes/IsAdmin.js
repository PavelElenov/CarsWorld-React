import { useContext, Fragment } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import Unauthorized from "../Unauthorized";

const IsAdmin = () => {
    const {user} = useContext(UserContext);

    return (
        <Fragment>
            {user.IsAdmin ? <Outlet /> : <Unauthorized />}
        </Fragment>
    );
};

export default IsAdmin;