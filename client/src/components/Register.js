import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div id="register">
            <div className="overlay" />
            <form action className="login-register-form">
                <p className="form__header">Register</p>
                <div className="content">
                    <div>
                        <input type="text" placeholder="Username" name="username" />
                    </div>
                    <div>
                        <input type="text" placeholder="Email" name="email" />
                    </div>
                    <div>
                        <input type="password" placeholder="Password" name="password" />
                    </div>
                    <div>
                        <input type="password" placeholder="Repeat Password" name="repPassword" />
                    </div>
                    <button className="primary-button">Register</button>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Register;