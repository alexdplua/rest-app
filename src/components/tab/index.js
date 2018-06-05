import React from 'react';
import PropTypes from 'prop-types';

class TabNav extends React.Component {

    constructor(props) {
        super(props);
        this.renderItems = this.renderItems.bind(this)
    }

    static propTypes = {
        changeActive: PropTypes.func.isRequired,
        active: PropTypes.number.isRequired,
        items: PropTypes.array.isRequired

    }

    renderItems = (item, index) => {
        return(
            <li key={index} onClick={() => this.props.changeActive(index)} className={`navig__item ${(this.props.active===index) ? 'active' : null}`}><span className="navig__text">{item}</span></li>
        )
    }



    render() {
        return (
            <div className="navig">
                <div className="navig__container">
                    <ul className="navig__list">
                        {this.props.items.map((item, index) => this.renderItems(item, index))}
                    </ul>
                </div>
            </div>

        );
    }
}



export default TabNav
