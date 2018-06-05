import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

import {
    fetchCategories
} from '../../actions';

class Menu extends React.Component {

    menuClose() {
        document.querySelector('.menu-wrap').classList.remove('menu-wrap__show')
        document.querySelector('.menu-wrap__mask').classList.remove('menu-wrap__mask-show')
        document.querySelector('body').classList.remove('body-fix')
    }

    componentDidMount() {
        this.props.fetchCategories()
    }

    static propTypes = {
        fetchCategories: PropTypes.func.isRequired
    }


    renderMenuItem(category, index) {
        return (
            <li key={index} className="menu-item" onClick={this.menuClose}>
                <Link to={`/categories/${category.id}`}>
                    <span className="menu-item__icon" style={{backgroundImage: `url(${category.menuImage})`}}>
                        {/*<img src={''}
                             height="12"
                             width="17"/>*/}
                    </span>
                    <span className="menu-item__name">{category.name}</span>
                    <span className="menu-item__view">{category.views}</span>
                </Link>
            </li>
        )
    }

    render() {
        const {categories} = this.props
        return (
            <div className="menu-wrap">
                <div className="menu-wrap__scroll">
                    <div className="menu-wrap__mask" onClick={this.menuClose}/>
                    <div onClick={this.menuClose} className="menu-close">
                        <span/>
                        <span/>
                    </div>

                    <div className="menu">
                        <Link to={'/'} onClick={this.menuClose} className="menu-logo">
                            <img src="../../img/logo2.png"/>
                        </Link>
                        <ul className="menu__container">
                            {categories.map((category, index) => this.renderMenuItem(category, index))}
                            </ul>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    categories: state.categories
})

const mapDispatchToProps = {
    fetchCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
