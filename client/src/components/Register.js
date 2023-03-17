import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { post } from "../services/requests";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { setItemInLocalStorage } from "../utils/localStorageManagment";

const Register = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        repPassword: "",
    });
    const navigate = useNavigate();
    const { loginUser } = useContext(UserContext);
    const [serverError, setServerError] = useState(null);
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        repPassword: "",
    });

    const register = async (e) => {
        e.preventDefault();
        Object.keys(data).map(key => data[key] == "" && setErrors(state => ({ ...state, [key]: `${key.charAt(0).toUpperCase() + key.slice(1)} is required` })));
        const haveErrors = Object.keys(errors).find(key => errors[key] !== "");
        console.log(haveErrors);

        if (!haveErrors) {
            const response = await post("/register", data);

            if (response.ok === true) {
                const data = await response.json();
                loginUser(data);
                setItemInLocalStorage("auth", data);
                navigate("/");
            } else {
                const error = await response.json();
                setServerError(error.message);
            }
        }

    }

    const changeHandler = (e) => {
        setData(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case "firstName":
                nameValidate(e.target.value, e.target.name);
                break;
            case "lastName":
                nameValidate(e.target.value, e.target.name);
                break;
            case "email":
                !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value) ? setErrors(state => ({ ...state, [e.target.name]: "Invalid Email" })) :
                    setErrors(state => ({ ...state, [e.target.name]: "" }));
                break;
            case "password":
                passwordValidate(e.target.value, e.target.name);
                break;
            case "repPassword":
                passwordValidate(e.target.value, e.target.name);
                break;
        }
    };

    const passwordValidate = (value, name) => {
        value.length < 4 ? setErrors(state => ({ ...state, [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} must be at least 4 characters` })) :
        setErrors(state => ({ ...state, [name]: "" }));
    };

    const nameValidate = (value, name) => {
        return value.length < 2 ? setErrors(state => ({ ...state, [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} must be at least 2 characters` })) :
        setErrors(state => ({ ...state, [name]: "" }));
    }

    return (
        <div id="register">
            <div className="overlay" />
            <form className="login-register-form" onSubmit={register}>
                <p className="form__header">Register</p>
                <div className="content">
                    <div>
                        <input type="text" placeholder="FirstName" name="firstName" value={data.firstName} onChange={changeHandler} onBlur={blurHandler} />
                        {errors.firstName && <span className="error">{errors.firstName}</span>}
                    </div>
                    <div>
                        <input type="text" placeholder="LastName" name="lastName" value={data.lastName} onChange={changeHandler} onBlur={blurHandler} />
                        {errors.lastName && <span className="error">{errors.lastName}</span>}
                    </div>
                    <div>
                        <input type="text" placeholder="Email" name="email" value={data.email} onChange={changeHandler} onBlur={blurHandler} />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div>
                        <input type="password" placeholder="Password" name="password" value={data.password} onChange={changeHandler} onBlur={blurHandler} />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>
                    <div>
                        <input type="password" placeholder="Repeat Password" name="repPassword" value={data.repPassword} onChange={changeHandler} onBlur={blurHandler} />
                        {errors.repPassword && <span className="error">{errors.repPassword}</span>}
                    </div>
                    {serverError && <span className="error">{serverError}</span>}
                    <button className="primary-button">Register</button>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Register;