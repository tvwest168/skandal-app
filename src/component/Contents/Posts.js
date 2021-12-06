import React from 'react';
//import VideoThumbnail from "react-thumbnail-player";
import Thumbnails from "./Thumbnails";
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
           <NavLink  key={posta.id} to={`/m/${posta.ipfs_cid}`}   className="posts_navlink"  >     
            
             <Thumbnails 
              keyI={posta.id}
              title={posta.title}
              thumb_url={`https://play.studioskandal.com/ipfs/`+posta.ipfs_cid}

              thumb_width={200}
              thumb_title={posta.title}
              thumb_message={((posta.view <= 0)?"1040":posta.view)+" views"}
              
              snaptime={8}
           
              badge="HD"
              badgeBg="green"
              className="customClassName" />
             
       </NavLink> 
           ))}

        </div>
    );

}

export default Posts;

 /*  <li key={posta.id}>{posta.id} | {posta.title} | {posta.substitle} </li> 
              
 <VideoThumbnail
             
               key={posta.id}
               title={posta.title}
               message={((posta.view <= 0)?"1040":posta.view)+" views"}
               preview={`https://play.studioskandal.com/ipfs/`+posta.ipfs_cid}
               muted={true}
               snapshotAtTime={10}
               light = {true}
               width={200}
               badge="HD"
               badgeBg="green"
               classname="customClassName"
             /> */