import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Cars = () => {
    const { user } = useContext(UserContext);

    const changeBrands = (e, brandName) => {
        const span = document.getElementsByClassName("active-brand")[0];
        span.className = "";
        e.target.className = "active-brand";

        const div = document.querySelector(".active-cars");
        div.className = div.className.replace(" active-cars", "");

        document.querySelector(`.${brandName}`).className += " active-cars";
    }

    return (
        <div id="cars">
            {user && user.isAdmin && <Link to="/add-car" className="add primary-button">Add Car +</Link>}

            <section className="cars-page">
                <h1 className="cars__header">Our cars</h1>
                <p className="choose">Choose Brand</p>
                <div className="cars-content">
                    <div className="brands">
                        <ul>
                            <li>
                                <span className="active-brand" onClick={(e) => changeBrands(e, 'bmw')}>BMW</span>
                            </li>
                            <li>
                                <span onClick={(e) => changeBrands(e, 'mercedes')}>Mercedes</span>
                            </li>
                            <li>
                                <span onClick={(e) => changeBrands(e, 'audi')}>Audi</span>
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
                                    <img src="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYf6Jia10tLhu1XzWVo7puMLWFmdkAj5DOPFtEBZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giTLNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYVpHWh1DMztIAzeqVYDafaOojmztYRSJdw67aftxdTUDw1RSfWQlUY%25VxdSeZs3muzWQdjc0kN3aeZQ6KAn6XRjcZwBO5zrx6Kc%252yG84WwBKupC3PFe%252B3iEzIIjup2XHNaWv63iprJ8yrGwXHi4TPFR9%25rJHFlMILou4TJIsDTpL3FlTv0YlHyXIslGAtW4Crv0s9OfJEE4GA0ogS6kNF9OALUdwLkIogOybQVunvLUgChZz45GybUEqczZ89ChbNmKQWPoEqhk7bfDMLNmqn1hmGDyk7m5Vqz9YCn178zmaftE5V1Pa7IsfN8zVMR1KMSkPazDxVBidnMRaYWz2%25Q5DxRteaEzZ8YWxfjRNfcPteWS6xkpKMfjedwHC5BDS6jQ%25JNp2Ydw6ZuTlcptQ%25wc3lsDifZu%25KXs0mHSc3uBr0ClJdKX324AkETQBrXpFOhDlZ24riIg6gscpF4HviR30KiIFJGHXXABHvIT9JxOO2JGvloTQigpT9GsLlZ0Ui591WmyGZI6ao5NF14ivAj0%25lJfV" alt="img" />
                                </div>

                                {user &&
                                    <div>
                                        <Link to="/details/1" className="primary-button">Details</Link>
                                    </div>}

                            </div>
                        </div>
                        <div className="mercedes">
                            <div className="car">
                                <form action method="post" className="car">
                                    <p className="car_info">Mercedes</p>
                                    <p className="car_info">111111лв.</p>
                                    <p className="car_info"><span>Electrical</span></p>
                                    <div className="car_img">
                                        <img src="https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqbSFqtyO67PobzIr3eWsrrCsdRRzwQZgk4ZbMw3SGtGyStsd2vtcUfp8cXGEubYJ0l36xOB2NS5bApjIXI5uVKDQC31MOkzNwPnm7jZeDhKVFXM%25vqCtTyLRzcmYax7aYrH1KC%25n8wvzxoiZL7IM4FaSjTg9Hhn6PD8%256SeWAmItsd5J3cUfCOcXGEz9mJ0l7DtOB2KbcbApvI9I5uO5qQC3ig7kzN4PZm7jgGDhKVBSh%25vqAv9yLR5nDYaxCNqrH1zm1n8w7hxoiZKMXM4FvTrTg9L6k6PDaGbSeWH09tsd9JTcUfA%25qXGE5YrJbXSqxVOWn8wzOyoiZClYaOJs2rHyOqpn85kZuoiMoi3M4TM9NTg6kCj6PSyzVS%257k4u1AGzq7cDzbH7eWqsPiXX0v1LU2sLRlavznzWPWbghyOiIgcBXL3sL&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,-25,1370,770),gravity=Center;Resize,width=300" alt="" />
                                    </div>
                                    {user &&
                                        <div>
                                            <Link to="/details/1" className="primary-button">Details</Link>
                                        </div>}
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
                                        <img src="https://cdn.nwi-ms.com/media/bg/A/comm/A20220232832/model/front.jpg?size=S&flags=transparent" alt="" />
                                    </div>
                                    {user &&
                                        <div>
                                            <Link to="/details/1" className="primary-button">Details</Link>
                                        </div>}
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