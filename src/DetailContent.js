import React from 'react'
import './DetailContent.css';
import ReactPlayer from 'react-player/lazy';
import AdsDetail from './component/Contents/ads_detail';

import {   useParams  } from "react-router-dom";



function  DetailContent (){
   let {id} =  useParams();
   
   return (
            <>
            <div className="detailContent" >
                        
                        <ReactPlayer className="sss" controls="false" url={`https://play.studioskandal.com/ipfs/`+id} />
                        
            </div>
            <AdsDetail />
            </>
    );
}
export default DetailContent; 