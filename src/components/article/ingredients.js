import React from 'react';
import PropTypes from 'prop-types';

const Ingredients = ({
                         ingredients
                     }) => {
    return (
        <ul className="content__list">
            {ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
        </ul>
    )
}

export default Ingredients

Ingredients.propTypes = {
    ingredients: PropTypes.array.isRequired
}
