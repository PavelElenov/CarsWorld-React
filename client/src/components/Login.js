import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { post } from "../services/requests";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Login = () => {
    const [data, setData] = useState({
        email:"",
        password: "",
    });
    const navigate = useNavigate();
    const { loginUser } = useContext(UserContext);
    const [serverError, setServerError] = useState(null);
    const [errors, setErrors] = useState({
        email:"",
        password: "",
    });

    const login = async (e) => {
        e.preventDefault();
        Object.keys(data).map(key => data[key] == "" && setErrors(state => ({ ...state, [key]: `${key.charAt(0).toUpperCase() + key.slice(1)} is required` })));
        const haveErrors = Object.keys(errors).find(key => errors[key] !== "");

        if(!haveErrors){
            const response = await post("/login", data);

            if(response.ok === true){
                const data = await response.json();
                loginUser(data);
                navigate("/");
            }else{
                const error = await response.json();
                setServerError(error.message);
            }
        }
       
    }

    const onChangeHandler = (e) => {
        setData(state => ({...state, [e.target.name]: e.target.value}));
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
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
        <div id="login">
            <div className="overlay" />
            <form className="login-register-form" onSubmit={login}>
                <p className="form__header">Login</p>
                <div className="content">
                    <div>
                        <i className="fa-solid fa-user" />
                        <input type="text" placeholder="Email" name="email" value={data.email} onChange={onChangeHandler} onBlur={blurHandler}/>
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div>
                        <i className="fa-solid fa-lock" />
                        <input type="password" placeholder="Password" name="password" value={data.password} onChange={onChangeHandler} onBlur={blurHandler}/>
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>
                    {serverError && <span className="error">{serverError}</span>}
                    <button className="primary-button">Login</button>
                    <p>Not a member? <Link to="/register">Register</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;