import Nav from "../all/Nav.js";
import Feature from "../all/Feature.js";
import Form from "../all/Form.js";
import Footer from "../all/Footer.js";
import CartsView from "./CartsView.js";

function Cart () {
    return ( 
        <>
        <Nav/>
        <CartsView />
        <Feature/>
        <Form/>
        <Footer/>
        </>
     );
}

export default Cart;