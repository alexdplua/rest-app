import React from 'react';
import {Link} from 'react-router';

const Header = () => {
    return (
        <header className="header">
            <div href="" className="menu-button">
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
