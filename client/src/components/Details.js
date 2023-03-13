import { Link } from "react-router-dom";

const Details = () => {
    return (
        <div id="car-details">
            <div className="car-content">
                <p className="car-content__header">Details</p>
                <div className="img">
                    <img src="https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq0WFqtyO67PobzIr3eWsrrCsdRRzwQZQ9vZbMw3SGtGyStsd2HtcUfpOyXGEuTRJ0l3OtOB2q8%25bApRiwI5ux6YQC30MrkzNHTnm7j871hKVi%25Q%25vq4ylyLRsGHYaxU0drH1Gm%25n8w7OnoiZKiEM4FvRwTg9LYn6PDarDSeWHtItsd8cTcUfiXyXGE45mJ0ldItOB2fMqbAp7AbI5uKMTQmIJwF1kl6PDLkoSeWv3M4kWCNTg7o0j6PS6WVSeth7qtsc%25XRcUXnvxXrL%25ejFzAv1LOfvO4lGE10UPbb5HF8B308wuiHvTvEUEksYnQPmsOCb8V08&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,-25,1370,770),gravity=Center;Resize,width=300" alt="" />
                </div>
                <p><span>Brand:</span> Mercedes</p>
                <p><span>Model:</span> Mercedes Maybach S-Class</p>
                <p><span>Price:</span> 200167lv.</p>
                <p><span>Description:</span></p>
                <p>The Mercedes Maybach S-Class is a luxury sedan that is designed to provide the ultimate driving
                    experience for those who appreciate the finer things in life. This vehicle is the epitome of luxury,
                    combining the elegance and sophistication of a Mercedes-Benz with the exclusivity and prestige of
                    the Maybach brand.</p>
                {/* If admin */}
                <div className="buttons">
                    <Link to="/edit-car/1" className="primary-button">Edit</Link>
                    <button className="primary-button">Delete</button>
                </div>
                {/* Else */}
                {/* <div className="buy">
                    <button className="primary-button">Buy</button>
                </div> */}
            </div>
        </div>
    );
};

export default Details;