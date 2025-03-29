import { useSelector } from 'react-redux';

function CartTotal() {

    const sum = useSelector(state => state.cart.sum);
    console.log(sum)
    return (
        <div className="total">
            <div className="total__sub">
                <span>SUB TOTAL</span>
                <p>{sum+ '$'}</p>
            </div>
            <div className="total__grand">
                <span>GRAND TOTAL</span>
                <p>{sum + '$'}</p>
            </div>
            <div className="total__line">

            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
    );
}

export default CartTotal;