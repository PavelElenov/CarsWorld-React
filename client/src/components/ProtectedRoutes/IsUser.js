import { useContext, Fragment } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const IsUser = () => {
    const { user } = useContext(UserContext);

    return (
        <Fragment>
            {user ? <Outlet /> : <Navigate to="/login" replace={true}/>}
        </Fragment>
    );
};

export default IsUser;