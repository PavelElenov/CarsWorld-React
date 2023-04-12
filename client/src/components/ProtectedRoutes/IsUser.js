import { useContext, Fragment } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const IsUser = () => {
    const { user } = useContext(UserContext);
    console.log("I am in IsUser");

    return (
        <Fragment>
            {user ? <Outlet /> : <Navigate to="/login" replace={true}/>}
        </Fragment>
    );
};

export default IsUser;