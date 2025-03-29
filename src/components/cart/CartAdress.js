function CartAdress() {
    return (
        <form  action="/" method="get" className="adress">
            <p>SHIPPING ADRESS</p>
            <input type="text" placeholder="Bangladesh"></input>
            <input type="text" placeholder="State"></input>
            <input type="text" placeholder="Postcode / Zip"></input>
            <button>GET A QUOTE</button>
        </form>
     );
}

export default CartAdress;