import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { clearCart } from "../../slice/sliceCart.js";
import { setQuantity } from "../../slice/sliceCart.js";
import { Link } from "react-router-dom";


function Cartblock() {

    const cartElements = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    return (
        <div className="carts">

            {cartElements.length === 0 ?
                (
                    <div className="carts__empty">
                        <span>В корзине пока пусто</span>
                    </div>
                ) : (
                    <div className="carts__elements">
                        {cartElements.map((el, i) => {
                            return (
                                <div key={el.id} className="carts__elements__cart" id={el.id}>
                                    <img alt="img" src={el.src}></img>
                                    <div className="cart__description">
                                        <p className="cart__description__head">MANGO  PEOPLE  T-SHIRT</p>

                                        <div className="cart__description__parameters">
                                            <div>
                                                <span>Price:</span>
                                                <p>{'$' + el.price}</p>
                                            </div>
                                            <div>
                                                <span>Color:</span>
                                                <select>
                                                    <option>Red</option>
                                                    <option>Blue</option>
                                                    <option>Black</option>
                                                    <option>Green</option>
                                                </select>
                                            </div>
                                            <div>
                                                <span>Size:</span>
                                                <select>
                                                    <option>XS</option>
                                                    <option>S</option>
                                                    <option>L</option>
                                                    <option>M</option>
                                                </select>
                                            </div>
                                            <div>
                                                <span>Quantity:</span>
                                                <input type="number" min="1" max="10" placeholder="1" defaultValue={1}
                                                    onInput={(e) => {
                                                        if (e.target.value > 10) e.target.value = 10;
                                                    }}
                                                    onClick={(e) => {
                                                        const parentId = e.currentTarget.closest('.carts__elements__cart').id;
                                                        dispatch(setQuantity({ id: parentId, amount: Number(e.target.value) }))
                                                    }}
                                                ></input>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            }


            <div className="carts__button">
                <button onClick={() => dispatch(clearCart())}>CLEAR SHOPPING CART</button>
                <Link to={'/catalog'}>
                    <button>CONTINUE SHOPPING</button>
                </Link>
            </div>
        </div>
    );
}

export default Cartblock;