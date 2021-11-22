import React from 'react';
import Sidebar from './Contents/Sidebar';
import RecomendedVideo from './Contents/RecomendedVideo';
import './BodyContent.css';

function BodyContent({title,category,token}) {
    return (
        <div className="bodycontent">
            <Sidebar className="bodycontent_sidebar" />
            <RecomendedVideo category={category} title={title} token={token} />
        </div>
    )
}

export default BodyContent
