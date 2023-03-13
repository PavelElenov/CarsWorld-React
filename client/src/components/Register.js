import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { post } from "../services/requests";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { setItemInLocalStorage } from "../utils/localStorageManagment";

const Register = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        repPassword: "",
    });
    const navigate = useNavigate();
    const { loginUser } = useContext(UserContext);
    const [serverError, setServerError] = useState(null);
    const [errors, setErrors] = useState({
        username: "",
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
            case "username":
                e.target.value.length < 2 ? setErrors(state => ({ ...state, [e.target.name]: "Username must be at least 2 characters" })) :
                    setErrors(state => ({ ...state, [e.target.name]: "" }));
                break;
            case "email":
                !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value) ? setErrors(state => ({ ...state, [e.target.name]: "Invalid Email" })) :
                    setErrors(state => ({ ...state, [e.target.name]: "" }));
                break;
            case "password" || "repPassword":
                e.target.value.length < 4 ? setErrors(state => ({ ...state, [e.target.name]: "Password must be at least 4 characters" })) :
                    setErrors(state => ({ ...state, [e.target.name]: "" }));
                break;
        }
    }

    return (
        <div id="register">
            <div className="overlay" />
            <form className="login-register-form" onSubmit={register}>
                <p className="form__header">Register</p>
                <div className="content">
                    <div>
                        <input type="text" placeholder="Username" name="username" value={data.username} onChange={changeHandler} onBlur={blurHandler} />
                        {errors.username && <span className="error">{errors.username}</span>}
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