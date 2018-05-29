import React from 'react';
import Header from '../header';
// import Menu from '../menu';
import Window from '../window';

const Layout = ({children}) => {
    return (
        <div>
            <Window/>
            <Header/>
            {/*<Menu/>*/}
            {children}
        </div>
    )
}

export default Layout
