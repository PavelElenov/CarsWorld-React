const Cart = () => {
    return (
        <div id="cart">
            <section className="cart-content">
                {/* If have items */}
                <p className="cart-content__header">Your cart (1 product)</p>
                {/* If don't have items */}
                {/* <p class="cart-content__header">Your cart is empty</p> */}
                <div className="item-content">
                    <div className="items">
                        <div className="item-info">
                            <div className="product-img">
                                <img src="https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqNWFqtyO67PobzIr3eWsrrCsdRRzwQZQ9vZbMw3SGtGyStsd2sDcUfp8qXGEubYJ0l3OZOB2qrubApRARI5ux4YQC31SrkzNHTwm7j8hZhKVi%25E%25vq4yZyLRhAmYaxUbprH1Gm%25n8w7OnoiZKq1M4FvyMTg9LUO6PDGmhSc6o3jutZ%25vqBJ9yLR0OEYaxv0JrH1LCtn8waV2oiZ3LQM4FgCrTg9Pze6PDe7mSeWsaWtsLV79MOuljcVGDtyjUdhcfWF002ROxEnfxXr1RjijhWh5DvaAFCDGp0xTfx&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-25,1370,770),gravity=Center;Resize,width=300" alt="" />
                            </div>
                            <p className="product-information">
                                Mercedes C-Class Limousine
                            </p>
                            <table className="for-price">
                                <tbody><tr>
                                    <th>Price</th>
                                </tr>
                                    <tr>
                                        <td>123.69lv</td>
                                    </tr>
                                </tbody></table>
                            <button className="secondary-button">Delete</button>
                        </div>
                    </div>
                    <div className="total-price">
                        <p>Order value</p>
                        <p><span>Price:</span> <span>59585.00lv.</span></p>
                        <p><span>Delivery:</span> <span className="delivery">Free</span></p>
                        <p><span>Total:</span> <span className="total">595545.00lv.</span></p>
                        <button className="primary-button">Buy</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cart;