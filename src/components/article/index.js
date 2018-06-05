import React from 'react';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import {
    fetchDishById
} from '../../actions';

import {
    getSimilarDishes
} from '../../selectors';

import ArticleItem from './article-item';
import Content from '../content';
import TabNav from '../tab';

import Description from './description';
import SimilarItems from '../similarItems';
import Ingredients from './ingredients';

class Article extends React.Component {

    constructor(props) {
        super(props)

        this.changeActive = this.changeActive.bind(this)

        this.state = {
            active: 0
        }
    }

    static propTypes = {
        fetchDishById: PropTypes.func.isRequired,
        dish: PropTypes.object.isRequired,
        similarDishes: PropTypes.array
    }

    componentDidMount() {
        this.props.fetchDishById(this.props.params.id)
        console.log('componentDidMount');
    }


    componentDidUpdate(prevProps, prevState, prevContext) {
        if (prevProps.params.id !== this.props.params.id) {
            console.log('componentDidUpdate', this.props.params.id);
            prevProps.fetchDishById(this.props.params.id)
            window.scrollTo(0, 0)
        }
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }


    changeActive(active){
        this.setState({
            active
        })
        console.log('active', active);
    }

    renderElements(){

        const description = this.props.dish.description || []
        const similarDishes = this.props.similarDishes || []
        const {videoLink} = this.props.dish
        const ingredients = this.props.dish.ingredients || []

        switch (this.state.active){
            case 0:
                return(
                    <div className="content tabs">
                        <div className="content__container">
                            <Content title={'Method:'}>
                                <Description description={description}/>
                            </Content>
                            <Content title={'Video:'}>
                                <YouTube
                                    videoId={videoLink}
                                    onReady={this._onReady}
                                    opts={{
                                        width: '100%',
                                        height: 'auto'

                                    }}
                                />
                            </Content>
                            <Content title={'You may also like:'}>
                                <SimilarItems similarDishes={similarDishes} />
                            </Content>
                        </div>
                    </div>
                )
            case 1:
                return (
                    <div className="content__container">
                        <Content title={'Ingredients'} renderContent={this.renderIngredients}>
                            <Ingredients ingredients={ingredients} />
                        </Content>
                    </div>
                )
            default:
                return null
        }
    }

    render() {
        console.log('this.props.dish', this.props.dish)
        const {dish} = this.props

        return (
            <div>
                <TabNav changeActive={this.changeActive} active = {this.state.active} items = {['Method', 'Ingredients']} />
                <div className="article">
                    <ArticleItem dish={dish}/>
                    {this.renderElements()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    dish: state.dishById,
    similarDishes: getSimilarDishes(state)
})

const mapDispatchToProps = {
    fetchDishById
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)
