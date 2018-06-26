import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

import {
    getDishes
} from '../../selectors';
import {
    fetchDishes
} from '../../actions';

import ArticleItem from '../article/article-item';

class Articles extends React.Component {

    constructor(props){
        super(props)

    }

    componentDidMount() {
        console.log('componentDidMount');
        this.props.fetchDishes()
    }

    static propTypes = {
        fetchDishes: PropTypes.func.isRequired
    }


    renderArticle(dish, index) {
        console.log('dish', dish);
        return (
            <Link key={index} to={`/article/${dish.id}`}>
                <ArticleItem  dish={dish}/>
            </Link>
        )
    }

    render() {
        if(!this.props.dishes) return null
        if (this.props.fetch) return null
        const dishes = this.props.dishes
        return (
            <div className="article">
                {dishes.map((dish, index) => this.renderArticle(dish, index))}
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    dishes: getDishes(state, ownProps),
    fetch: state.dishes.fetch,
    // dishes: state.dishes
})

const mapDispatchToProps = {
    fetchDishes
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles)
