import Cartblock from "./CartBlock.js";
import CartAdress from "./CartAdress.js";
import CartTotal from "./CartTotal.js";
import { useDispatch } from 'react-redux';


function CartsView() {



    return (
        <div className="cart">
            <div className="cart__breadCrumbs">
                <div className="cart__breadCrumbs__content">
                    <p>SHOPPING CART</p>
                </div>

            </div>

            <div className="cart__elements">
                <Cartblock />
                <CartAdress />
                <CartTotal />
            </div>

        </div>
    );
}

export default CartsView;