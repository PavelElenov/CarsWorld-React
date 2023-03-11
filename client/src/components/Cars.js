import { Link } from "react-router-dom";

const Cars = () => {
    return (
        <div id="cars">
            {/* If admin */}
            <Link to="/add-car" className="add primary-button">Add Car +</Link>
            <section className="cars-page">
                <h1 className="cars__header">Our cars</h1>
                <p className="choose">Choose Brand</p>
                <div className="cars-content">
                    <div className="brands">
                        <ul>
                            <li>
                                <span className="active-brand">BMW</span>
                            </li>
                            <li>
                                <span>Mercedes</span>
                            </li>
                            <li>
                                <span>Audi</span>
                            </li>
                        </ul>
                    </div>
                    <div className="cars">
                        <div className="bmw active-cars">
                            <div className="car">
                                <p className="car_info">Mercedes</p>
                                <p className="car_info">111111лв.</p>
                                <p className="car_info"><span>Electrical</span></p>
                                <div className="car_img">
                                    <img src="https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq0WFqtyO67PobzIr3eWsrrCsdRRzwQZQ9vZbMw3SGtGyStsd2HtcUfpOyXGEuTRJ0l3OtOB2q8%25bApRiwI5ux6YQC30MrkzNHTnm7j871hKVi%25Q%25vq4ylyLRsGHYaxU0drH1Gm%25n8w7OnoiZKiEM4FvRwTg9LYn6PDarDSeWHtItsd8cTcUfiXyXGE45mJ0ldItOB2fMqbAp7AbI5uKMTQmIJwF1kl6PDLkoSeWv3M4kWCNTg7o0j6PS6WVSeth7qtsc%25XRcUXnvxXrL%25ejFzAv1LOfvO4lGE10UPbb5HF8B308wuiHvTvEUEksYnQPmsOCb8V08&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,-25,1370,770),gravity=Center;Resize,width=300" alt="img" />
                                </div>
                                {/* If user is loged */}
                                <div>
                                    <Link to="/details/1" className="primary-button">Details</Link>
                                </div>
                            </div>
                        </div>
                        <div className="mercedes">
                            <div className="car">
                                <form action method="post" className="car">
                                    <p className="car_info">Mercedes</p>
                                    <p className="car_info">111111лв.</p>
                                    <p className="car_info"><span>Electrical</span></p>
                                    <div className="car_img">
                                        <img src="https://www.mercedes-benz.bg/passengercars/buy/newbrochure/a-class/_jcr_content/swipeableteaserbox/par/swipeableteaser_462510236/asset.MQ6.12.20221215183109.jpeg" alt="" />
                                    </div>
                                    <div className="div-button">
                                        <button className="third_btn">Add in Cart</button>
                                        <button>Details</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="audi">
                            <div className="car">
                                <form action method="post" className="car">
                                    <p className="car_info">Mercedes</p>
                                    <p className="car_info">111111лв.</p>
                                    <p className="car_info"><span>Electrical</span></p>
                                    <div className="car_img">
                                        <img src="https://cf-cdn-v5.audi.at/media/Theme_Menu_Model_Dropdown_Item_Image_Component/root-bg-model-modelMenu-editableItems-20246-dropdown-413731-image/dh-487-a0e9a6/14357725/1675149545/audi-galerie-5-oe.jpg" alt="" />
                                    </div>
                                    <div className="div-button">
                                        <button className="third_btn">Add in Cart</button>
                                        <button>Details</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cars;