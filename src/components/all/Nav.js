import logo from '../../img/nav/logo.svg';
import search from '../../img/nav/search.svg';
import menu from '../../img/nav/menu.svg';
import lk from '../../img/nav/lk.svg';
import bascket from '../../img/nav/bascket.svg';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CountCart from './CountCart.js';
import { useSelector } from 'react-redux';

function Nav() {

    const [open, setOpen] = useState(false);
    const cartElements = useSelector((state) => state.cart.count);

    return (
        <div className="nav">
            <div className="nav__content">
                <div className="nav__content__logo">
                    <Link to="/">
                        <img className="logo__img" src={logo} alt="img" />
                    </Link>
                    <img className="logo__search" src={search} alt='img'></img>
                </div>

                <div className='nav__content__menu'>
                    <img className='menu__menu' src={menu} alt='img' onClick={() => setOpen(!open)}></img>
                    <img className='menu__lk' src={lk} alt='img'></img>
                    <Link to = "/cart">
                        <img className='menu__bascket' src={bascket} alt='img'></img>
                        <CountCart count={cartElements}/>
                    </Link>
                </div>
            </div>
            <Menu className = {open ? "menu__open" : "menu__close"}/>
        </div>
    );
}

export default Nav;