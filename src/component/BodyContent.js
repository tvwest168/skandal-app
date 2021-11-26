import React from 'react';
import Sidebar from './Contents/Sidebar';
import RecomendedVideo from './Contents/RecomendedVideo';

import './BodyContent.css';

function BodyContent({title,typeCategoryMain,category}) {
    return (
        <div className="bodycontent">
            <Sidebar className="bodycontent_sidebar" />
            <RecomendedVideo categoryMain={category} typeCategoryMain={typeCategoryMain} title={title} />
        </div>
    )
}

export default BodyContent
