import React from 'react';
import PropTypes from 'prop-types';

const Content = ({
                     title,
                     children
                 }) => {
    return (
        <div className="content__wrap">
            <h3 className="content__title">
                {title}
            </h3>
            {children}

        </div>
    )
}

export default Content

Content.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any
}
