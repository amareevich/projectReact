import ProductItem from "../all/ProductItem.js";
import { Link } from 'react-router-dom';



function ProductcPresent() {

    return (
        <div className="products-present">
            <div className="products-present__content">

                <div className="products-present__content__header">
                    <p>Fetured Items</p>
                    <span>Shop for items based on what we featured in this week</span>
                </div>

                <div className="products-present__content__items">
                    {Array.from({ length: 6 }, (_, i) => (
                        <ProductItem key={i + 1} className={"item__" + (i + 1)} src={"/offer/item__" + (i + 1) + ".svg"} />
                    ))}
                </div>

                <Link to = "/catalog">
                    <button className="products-present__content__btn">Browse All Product</button>
                </Link>

            </div>
        </div>
    );
}

export default ProductcPresent;