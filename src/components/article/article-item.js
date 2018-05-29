import React from 'react';
import {Link} from 'react-router';

const ArticleItem = ({dish, isLink}) => {

    const setRating = rating => {
        let rows = [];
        for (let i = 0; i < 5; i++) {
            let row = i <= rating - 1 ? <span key={i} className="star active"/> :
                <span key={i} className="star"/>;
            rows.push(row);
        }
        return (
            <div className="article-stars">
                {rows}
            </div>
        )

    }

    return (
            <div className="article__item" style={{backgroundImage: `url(${dish.image})`}}>
                <div className="article__mask"/>
                <div className="article-name">
                    <span className="article-name__title">{dish.name}</span>
                    <span className="article-name__author">{dish.author}</span>
                </div>
                <div className="article-stats">
                    {setRating(dish.rating)}
                    <div className="article-view"><span/>{dish.views}</div>
                </div>
            </div>
    )
}

export default ArticleItem
