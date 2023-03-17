import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Fragment } from "react";

const Header = () => {

    const { user, logoutUser } = useContext(UserContext);

    function onMenuClick() {
        const navigationBar = document.querySelector(".navigation-bar");
        const menuIcon = document.querySelector(".menu i");
        const isActive = navigationBar.className.includes("active-navigation-bar");

        if (isActive) {
            navigationBar.className = navigationBar.className.replace(" active-navigation-bar", "");
            menuIcon.className = "fa-solid fa-bars";
        } else {
            navigationBar.className += " active-navigation-bar";
            menuIcon.className = "fa-solid fa-xmark"
        }
    }

    return (
        <header id="header">
            <nav>
                <div className="menu">
                    <i className="fa-solid fa-bars" onClick={onMenuClick} />
                </div>
                <div className="navigation-bar">
                    <ul>
                        <li>
                            <Link to="/" className="link">
                                <i className="fa-solid fa-house"></i>
                                Home
                            </Link>
                        </li>
                        <li className="item">
                            <Link to="/cars" className="link">
                                <i className="fa-solid fa-car" />
                                Cars
                            </Link>
                        </li>
                        <li className="item">
                            <Link to="/accessories" className="link"> Accessories </Link>
                        </li>
    
                        {user ?
                            <Fragment>
                                <li className="cart">
                                    <Link to="/cart" className="link">
                                        <i className="fa-solid fa-cart-shopping" />
                                        <span className="cart__text">Cart</span>
                                        <span className="cart-items">0</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/profile" className="link">
                                        <i className="fa-solid fa-user" />
                                        Profile
                                    </Link>
                                </li>
                            </Fragment>
                            :
                            <Fragment>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/register">Register</Link>
                                </li>
                            </Fragment>
                        }
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;