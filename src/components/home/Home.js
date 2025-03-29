import Nav from "../all/Nav.js";
import Promo from "./Promo.js";
import Offer from "./Offer.js"
import ProductcPresent from "./ProductsPresent.js";
import Feature from "../all/Feature.js";
import Form from "../all/Form.js";
import Footer from "../all/Footer.js";


function Home() {
    return ( 
        <>
        <Nav/>
        <Promo/>
        <Offer/>
        <ProductcPresent/>
        <Feature/>
        <Form/>
        <Footer/>
        </>
     );
}

export default Home;