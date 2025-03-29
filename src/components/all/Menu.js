function Menu(props) {
    return (
        <div className={props.className}>
            <p>MENU</p>

            <details>
                <summary>MAN</summary>
                <ul>
                    <li>Accessories</li>
                    <li>Bags</li>
                    <li>Denim</li>
                    <li>T-Shirts</li>
                </ul>
            </details>

            <details>
                <summary>WOMAN</summary>
                <ul>
                    <li>Accessories</li>
                    <li>Jackets & Coats</li>
                    <li>Polos</li>
                    <li>T-Shirts</li>
                    <li>Shirts</li>
                </ul>

            </details>

            <details>
                <summary>KIDS</summary>
                <ul>
                    <li>Accessories</li>
                    <li>Jackets & Coats</li>
                    <li>Polos</li>
                    <li>T-Shirts</li>
                    <li>Shirts</li>
                    <li>Bags</li>
                </ul>
            </details>
        </div>
    );
}

export default Menu;