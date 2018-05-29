import React from 'react';

const Content = ({
                     title,
                     renderContent
                 }) => {
    return (
        <div className="content__wrap">
            <h3 className="content__title">
                {title}
            </h3>
            {renderContent()}

        </div>
    )
}

export default Content
