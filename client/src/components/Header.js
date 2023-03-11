import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header id="header">
            <nav>
                <div className="menu">
                    <i className="fa-solid fa-bars" />
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
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;