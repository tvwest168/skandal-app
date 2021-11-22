import React from 'react';
import VideoThumbnail from 'react-video-thumbnail';
import './Thumbnails.css';
function Thumbnails({thumb_url,thumb_width,snaptime}) {
    return (
        <div className="thumbnails">
               <VideoThumbnail  
                videoUrl={thumb_url}
                width={thumb_width}
                snapshotAtTime={snaptime}
                />
        </div>
    )
}

export default Thumbnails
