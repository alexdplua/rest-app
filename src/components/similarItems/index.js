import React from 'react';
import PropTypes from 'prop-types';
import SimilarItem from './similarItem';

const SimilarItems = ({
                          similarDishes
                      }) => {
    return (
        <div className="list">
            {similarDishes.map((dish, index) => <SimilarItem key={index} dish={dish} />)}
        </div>
    )
}

export default SimilarItems

SimilarItems.propTypes = {
    similarDishes: PropTypes.array.isRequired
}
