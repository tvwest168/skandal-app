import React from 'react'
import './DetailContent.css';
import ReactPlayer from 'react-player/lazy';

import {
   
    useParams
  } from "react-router-dom";

function  DetailContent (){
   let {id} =  useParams();
   return (
            <div className="detailContent" >
                        
                        <ReactPlayer className="sss" controls="true" url={`http://134.209.103.130/ipfs/`+id} />
            </div>
        
    );
}
export default DetailContent; 