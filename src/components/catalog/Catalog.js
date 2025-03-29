import Nav from "../all/Nav.js";
import Feature from "../all/Feature.js";
import Form from "../all/Form.js";
import Footer from "../all/Footer.js";
import CatalogView from "./CatalogView.js";

function Catalog () {
    return ( 
        <>
        <Nav/>
        <CatalogView/>
        <Feature/>
        <Form/>
        <Footer/>
        </>
     );
}

export default Catalog;