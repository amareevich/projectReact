import { useState, useEffect } from "react";
import ProductItem from "../all/ProductItem.js";


function CatalogView() {

    const [open, setOpen] = useState(false);
    const [openSize, setIsActive] = useState(false);

    const sizeArray = ['S', 'S', 'XS', 'XS', 'M', 'M', 'L', 'L', 'L'];
    const [selectedSizes, setSelectedSizes] = useState([]);

    const handleSizeChange = (size) => {
        setSelectedSizes((prev) =>
            prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
        );
    };

    const filteredProducts = sizeArray
        .map((size, i) => ({ id: i + 1, size }))
        .filter(({ size }) => selectedSizes.length === 0 || selectedSizes.includes(size));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="catalogView">

            <div className="catalogView__breadCrumbs">

                <div className="catalogView__breadCrumbs__heading">
                    <span>NEW ARRIVALS</span>
                </div>
                <div className="catalogView__breadCrumbs__crumbs">
                    <p>HOME</p>
                    <p>MEN</p>
                    <p>NEW ARRIVALS </p>
                </div>

            </div>

            <div className="catalogView__content">

                <div className="catalogView__content__filters">

                    <div className={!open ? "filters__inactive" : "filters__active"}
                        onMouseEnter={() => setOpen(true)}
                    >
                        <p>FILTER</p>
                        <svg width="15.000000" height="10.000000" viewBox="0 0 15 10" fill="#000000">
                            <path d="M0.83 10L4.16 10C4.62 10 5 9.62 5 9.16C5 8.7 4.62 8.33 4.16 8.33L0.83 8.33C0.37 8.33 0 8.7 0 9.16C0 9.62 0.37 10 0.83 10ZM0 0.83C0 1.29 0.37 1.66 0.83 1.66L14.16 1.66C14.62 1.66 15 1.29 15 0.83C15 0.37 14.62 0 14.16 0L0.83 0C0.37 0 0 0.37 0 0.83ZM0.83 5.83L9.16 5.83C9.62 5.83 10 5.45 10 5C10 4.54 9.62 4.16 9.16 4.16L0.83 4.16C0.37 4.16 0 4.54 0 5C0 5.45 0.37 5.83 0.83 5.83Z" fill="#000000" fillOpacity="1.000000" fillRule="nonzero" />
                        </svg>
                    </div>

                    <div
                        className={open ? 'filters__visible' : 'filters__hidden'}
                        onMouseLeave={() => setOpen(false)}
                    >
                        <details>
                            <summary>CATEGORY</summary>
                            <ul>
                                <li>Accessories</li>
                                <li>Bags</li>
                                <li>Denim</li>
                                <li>Hoodies & Sweatshirts</li>
                                <li>Jackets & Coats</li>
                                <li>Polos</li>
                                <li>Shirts</li>
                                <li>Shoes</li>
                                <li>Sweaters & Knits</li>
                                <li>T-Shirts</li>
                                <li>Tanks</li>

                            </ul>
                        </details>
                        <details>
                            <summary>BRAND</summary>
                        </details>
                        <details>
                            <summary>DESIGNER</summary>
                        </details>
                    </div>

                    <div className="filters__types">

                        <div>
                            <span>TRENDING NOW</span>
                            <svg width="10.020020" height="5.003906" viewBox="0 0 10.02 5.00391" fill="none">
                                <path id="Vector" d="M5 5C4.83 5 4.67 4.94 4.54 4.83L0.25 1.26C0.11 1.14 0.02 0.96 0 0.78C-0.02 0.59 0.04 0.4 0.16 0.25C0.28 0.11 0.46 0.02 0.64 0C0.83 -0.02 1.02 0.04 1.17 0.16L5 3.36L8.83 0.27C8.9 0.22 8.98 0.17 9.07 0.14C9.16 0.12 9.26 0.11 9.35 0.12C9.45 0.13 9.54 0.16 9.62 0.2C9.7 0.25 9.78 0.31 9.83 0.38C9.9 0.46 9.95 0.54 9.98 0.63C10.01 0.73 10.02 0.83 10.01 0.93C10 1.02 9.97 1.12 9.92 1.2C9.88 1.29 9.81 1.37 9.73 1.42L5.45 4.88C5.32 4.97 5.16 5.01 5 5Z" fill="#6F6E6E" fillOpacity="1.000000" fillRule="nonzero" />
                            </svg>
                        </div>

                        <div className="filters__types__size">
                            <span>SIZE</span>
                            <svg width="10.020020" height="5.003906" viewBox="0 0 10.02 5.00391" fill="none" onClick={() => setIsActive(prev => !prev)}>
                                <path id="Vector" d="M5 5C4.83 5 4.67 4.94 4.54 4.83L0.25 1.26C0.11 1.14 0.02 0.96 0 0.78C-0.02 0.59 0.04 0.4 0.16 0.25C0.28 0.11 0.46 0.02 0.64 0C0.83 -0.02 1.02 0.04 1.17 0.16L5 3.36L8.83 0.27C8.9 0.22 8.98 0.17 9.07 0.14C9.16 0.12 9.26 0.11 9.35 0.12C9.45 0.13 9.54 0.16 9.62 0.2C9.7 0.25 9.78 0.31 9.83 0.38C9.9 0.46 9.95 0.54 9.98 0.63C10.01 0.73 10.02 0.83 10.01 0.93C10 1.02 9.97 1.12 9.92 1.2C9.88 1.29 9.81 1.37 9.73 1.42L5.45 4.88C5.32 4.97 5.16 5.01 5 5Z" fill="#6F6E6E" fillOpacity="1.000000" fillRule="nonzero" />
                            </svg>

                            <div className={openSize === false ? "type__size__close" : "type__size__open"}>
                                <p>XS</p>
                                <input type="checkbox" onChange={() => handleSizeChange("XS")}></input>
                                <p>S</p>
                                <input type="checkbox" onChange={() => handleSizeChange("S")}></input>
                                <p>M</p>
                                <input type="checkbox" onChange={() => handleSizeChange("M")}></input>
                                <p>L</p>
                                <input type="checkbox" onChange={() => handleSizeChange("L")}></input>
                            </div>
                        </div>

                        <div>
                            <span>PRICE</span>
                            <svg width="10.020020" height="5.003906" viewBox="0 0 10.02 5.00391" fill="none">
                                <path id="Vector" d="M5 5C4.83 5 4.67 4.94 4.54 4.83L0.25 1.26C0.11 1.14 0.02 0.96 0 0.78C-0.02 0.59 0.04 0.4 0.16 0.25C0.28 0.11 0.46 0.02 0.64 0C0.83 -0.02 1.02 0.04 1.17 0.16L5 3.36L8.83 0.27C8.9 0.22 8.98 0.17 9.07 0.14C9.16 0.12 9.26 0.11 9.35 0.12C9.45 0.13 9.54 0.16 9.62 0.2C9.7 0.25 9.78 0.31 9.83 0.38C9.9 0.46 9.95 0.54 9.98 0.63C10.01 0.73 10.02 0.83 10.01 0.93C10 1.02 9.97 1.12 9.92 1.2C9.88 1.29 9.81 1.37 9.73 1.42L5.45 4.88C5.32 4.97 5.16 5.01 5 5Z" fill="#6F6E6E" fillOpacity="1.000000" fillRule="nonzero" />
                            </svg>
                        </div>
                    </div>

                </div>

                <div className="catalogView__content__products">
                    {filteredProducts.map(({ id, size }) => (
                        <ProductItem
                            key={id}
                            className={`product ${size}`}
                            id={id}
                            src={`/catalogIMG/product${id}.svg`}
                            data-size={size}
                        />
                    ))}
                </div>

                <div className="catalogView__content__pagination">
                    <button>
                        <img src="/catalogIMG/left.svg" alt="img"></img>
                    </button>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>20</li>
                    </ul>
                    <button>
                        <img src="/catalogIMG/right.svg" alt="img"></img>
                    </button>
                </div>
            </div>

        </div>
    );
}

export default CatalogView;
