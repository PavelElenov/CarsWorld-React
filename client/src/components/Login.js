import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div id="login">
            <div className="overlay" />
            <form action className="login-register-form">
                <p className="form__header">Login</p>
                <div className="content">
                    <div>
                        <i className="fa-solid fa-user" />
                        <input type="text" placeholder="Email" name="email" />
                    </div>
                    <div>
                        <i className="fa-solid fa-lock" />
                        <input type="text" placeholder="Password" name="password" />
                    </div>
                    <button className="primary-button">Login</button>
                    <p>Not a member? <Link to="/register">Register</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;