import React from 'react';
import {Link} from 'react-router';

const Header = () => {

    const openMenu = () =>{
        document.querySelector('.menu-wrap').classList.add('menu-wrap__show')
        document.querySelector('.menu-wrap__mask').classList.add('menu-wrap__mask-show')
        document.querySelector('body').classList.add('body-fix')
    }

    return (
        <header className="header">
            <div onClick={openMenu} className="menu-button">
                <span/>
                <span/>
                <span/>
            </div>
            <div className="logo logo-pos"><Link to={'/'}>
                <p>YEMEK TARİFLERİ</p>
            </Link></div>
        </header>
    )
}

export default Header
