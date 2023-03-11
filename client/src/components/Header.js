import { Link } from "react-router-dom";

const Header = () => {

    function onMenuClick() {
        console.log('HI');
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
                            <Link to="/">Home</Link>
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
                        {/* If user is loged */}
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

                        {/* Else */}
                        {/* <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;