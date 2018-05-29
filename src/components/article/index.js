import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import YouTube from 'react-youtube';
import {
    fetchDishById
} from '../../actions';

import {
    getSimilarDishes
} from '../../selectors';

import ArticleItem from './article-item';
import Content from '../content';

class Article extends React.Component {

    constructor(props) {
        super(props)

        this.renderDescription = this.renderDescription.bind(this)
        this.renderVideo = this.renderVideo.bind(this)
        this.renderSimilar = this.renderSimilar.bind(this)
    }

    componentDidMount() {
        this.props.fetchDishById(this.props.params.id)
    }

    renderDescription() {
        const description = this.props.dish.description || []
        return (
            <div>
                {description.map((desc, index) => <p key={index} className="content__text">{desc}</p>)}
            </div>
        )
    }

    renderVideo() {
        const {videoLink} = this.props.dish
        return (
            <YouTube
                videoId={videoLink}
                onReady={this._onReady}
                opts={{
                    width:'100%',
                    height: 'auto'

                }}
            />
        )
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    renderSimilar(){
        const {similarDishes} = this.props
        return(
            <div className="list">
                {similarDishes.map((dish, index) => {
                    return(
                        <div key={index} className="list__wrap">
                            <Link to={`article/${dish.id}`} className="list__block">
                                <div className="list__img" style={{backgroundImage: `url('${dish.image}')`}}>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        )
    }

    render() {
        console.log('this.props.dish', this.props.dish)
        const {dish} = this.props
        //
        return (
            <div className="article">
                <ArticleItem dish={dish}/>
                <div className="content tabs">
                    <div className="content__container tab active">
                        <Content title={'Hazırlanış:'} renderContent={this.renderDescription}/>
                        <Content title={'Tarifin Videosu:'} renderContent={this.renderVideo}/>
                        <Content title={'Tarif Resimleri:'} renderContent={this.renderSimilar}/>

                    </div>
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
