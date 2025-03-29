import { useEffect, useRef, useState } from "react";
import ProductAdd from "./ProductAdd.js";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slice/sliceCart.js";


function ProductItem({ className, src }) {

    const [add, setAdd] = useState(false);



    return (
        <div
            className={className}
            onMouseLeave={() => setAdd(false)}
            
        >
            <img
                src={src}
                alt="img"
                onMouseEnter={() => setAdd(true)}>
            </img>

            <p>ELLERY X M'O CAPSULE</p>

            <span className="description">
                Known for her sculptural takes on traditional tailoring,
                Australian arbiter of cool Kym Ellery teams up with Moda Operandi.
            </span>

            <span className="price">$52.00</span>

            <ProductAdd className={add === true ? "product__add" : "product__hidden"}/>
        </div>
    );
}

export default ProductItem;