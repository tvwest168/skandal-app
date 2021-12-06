import React from 'react';
import VideoThumbnail from 'react-video-thumbnail';

import './Thumbnails.css';
function Thumbnails({keyI,thumb_url,thumb_title,thumb_message,thumb_width,snaptime}) {
    return (
            <div className="thumbnails_con customClassName">
             <div className="thumbnails"><span className="thumbnails_bandage">HD</span>
               <VideoThumbnail  
              
                videoUrl={thumb_url}
                width={200}
                height={180}
                snapshotAtTime={snaptime}
                className="sssd"
                />

              </div>
              <h4 className="styles_title__1cca0">{thumb_title}</h4>
              <span className="styles_views__2l1fl">1040 views</span>
              </div>
    )
}

export default Thumbnails
