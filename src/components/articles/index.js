import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {
    fetchDishes
} from '../../actions';

import ArticleItem from '../article/article-item';

class Articles extends React.Component {

    componentDidMount() {
        this.props.fetchDishes()
    }


    renderArticle(dish, index) {
        console.log('dish', dish);
        return (
            <Link key={index} to={`article/${dish.id}`}>
                <ArticleItem  dish={dish}/>
            </Link>
        )
    }

    render() {
        const {dishes} = this.props
        return (
            <div className="article">
                {dishes.map((dish, index) => this.renderArticle(dish, index))}
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    dishes: state.dishes
})

const mapDispatchToProps = {
    fetchDishes
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles)
