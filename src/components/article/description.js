import React from 'react';
import PropTypes from 'prop-types';

const Description = ({description}) => {
    return (
        <div>
            {description.map((desc, index) => <p key={index} className="content__text">{desc}</p>)}
        </div>
    )
}

export default Description

Description.propTypes = {
    description: PropTypes.array
}
