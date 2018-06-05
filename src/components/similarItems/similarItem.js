import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

const SimilarItem = ({
                         dish
                     }) => {
    return (
        <div className="list__wrap">
            <Link to={`/article/${dish.id}`} className="list__block">
                <div className="list__img" style={{backgroundImage: `url('${dish.image}')`}}>
                </div>
            </Link>
        </div>
    )
}

export default SimilarItem

SimilarItem.propTypes = {
    dish: PropTypes.object
}
