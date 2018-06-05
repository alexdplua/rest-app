import React from 'react';
import Header from '../header';
import Menu from '../menu';
import Window from '../window';

const Layout = ({children}) => {
    return (
        <div>
            <Window/>
            <Menu/>
            <Header/>
            {children}
        </div>
    )
}

export default Layout
