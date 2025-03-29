import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { addToCart } from '../../slice/sliceCart';
import { useSelector } from 'react-redux';


function ProductAdd(props) {

    const ref = useRef(null);
    const dispatch = useDispatch();
    const count = useSelector(state => state.cart.count);

    const handleClick = () => {
        const el = Array.from(ref.current.parentElement.children);
        let obj = {};

        el.forEach( elem => {
            obj.id = count;
            if(elem.tagName === 'IMG') obj.src =  elem.src; 
            if(elem.tagName === 'SPAN') obj.price = Number(elem.textContent.replace(/[$]/g, ""));
            obj.quantity = 1
        });

        dispatch(addToCart(obj));

    }

    return (
        <div className={props.className} ref={ref}>
            <button className="product__add__btn" onClick={handleClick}>
                <svg width="25.986328" height="23.972656" viewBox="0 0 25.9863 23.9727" fill="none">
                    <path id="Vector" d="M21.31 21.97C21.36 21.96 21.38 21.94 21.4 21.91C21.4 21.91 21.41 21.9 21.42 21.89C21.45 21.85 21.46 21.76 21.46 21.71C21.44 21.61 21.35 21.53 21.28 21.53C21.27 21.53 21.27 21.53 21.27 21.53C21.19 21.54 21.1 21.64 21.11 21.76C21.12 21.88 21.2 21.97 21.27 21.97L21.31 21.97ZM7.65 21.96C7.75 21.96 7.83 21.87 7.83 21.75C7.83 21.64 7.75 21.54 7.65 21.54C7.56 21.54 7.47 21.64 7.47 21.75C7.47 21.87 7.56 21.96 7.65 21.96ZM21.43 23.97C21.39 23.97 21.32 23.97 21.27 23.97C20.14 23.97 19.19 23.06 19.11 21.9C19.03 20.69 19.93 19.62 21.13 19.54C21.18 19.54 21.23 19.53 21.28 19.53C22.41 19.53 23.38 20.43 23.45 21.59C23.49 22.19 23.31 22.76 22.92 23.2C22.54 23.66 22.01 23.92 21.43 23.97ZM7.65 23.96C6.45 23.96 5.47 22.97 5.47 21.75C5.47 20.53 6.45 19.54 7.65 19.54C8.86 19.54 9.83 20.53 9.83 21.75C9.83 22.97 8.86 23.96 7.65 23.96ZM20.63 17.1L8.57 17.1C8.13 17.1 7.75 16.8 7.64 16.38L3.71 1.95L0.96 1.95C0.43 1.95 0 1.51 0 0.97C0 0.43 0.43 0 0.96 0L4.43 0C4.87 0 5.25 0.29 5.36 0.71L9.29 15.14L19.99 15.14L23.55 6.83L11.69 6.83C11.16 6.83 10.73 6.4 10.73 5.86C10.73 5.32 11.16 4.88 11.69 4.88L25.02 4.88C25.34 4.88 25.65 5.04 25.83 5.32C26 5.6 26.03 5.94 25.9 6.25L21.51 16.51C21.35 16.87 21.02 17.1 20.63 17.1Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="nonzero" />
                </svg>
                <span>Add to Cart</span>
            </button>
        </div>
    );
}

export default ProductAdd;

