import React from 'react';
import './Thumbnails.css';

function Thumbnails2({keyI,thumb_url,thumb_img,thumb_title,thumb_message,thumb_width,snaptime}) {
   return (
      <div className="thumbnails_con customClassName">
       <div className="thumbnails"><span className="thumbnails_bandage">HD</span>
      
          <div className="thumb_con">
             <img src={thumb_img} className="thumb_img" />  
          </div>

        </div>
        <h4 className="styles_title__1cca0">{thumb_title}</h4>
        <span className="styles_views__2l1fl">1040 views</span>
        </div>
)
}

export default Thumbnails2