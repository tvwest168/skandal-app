import React from 'react';
import VideoThumbnail from "react-thumbnail-player";
import { NavLink } from 'react-router-dom';
import './Posts.css';


function Posts ({postsa,loading})  {

    
    if(loading){
        return (
            <div className="posts">
                <span>Loading...</span>
            </div>
        );
    }
    
    // console.log(loading);
    // console.log(postsa);
    
    return (
        <div className="posts">
           {postsa.map(posta =>(
             /*  <li key={posta.id}>{posta.id} | {posta.title} | {posta.substitle} </li> */
               <NavLink  key={posta.id} to={`/m/${posta.ipfs_cid}`} >
<VideoThumbnail
               onClick="asdaas"
               key={posta.id}
               title={posta.title}
               message="10M views"
               preview={`http://134.209.103.130:8080/ipfs/`+posta.ipfs_cid}
               muted={true}
               snapshotAtTime={150}
               light = {true}
               width={200}
               badge="HD"
               badgeBg="green"
               classname="customClassName"
             />
       </NavLink> 
           ))}

        </div>
    );

}

export default Posts;