import React from 'react'
import './DetailContent.css';
import ReactPlayer from 'react-player/lazy';
import AdsDetail from './component/Contents/ads_detail';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import {   useParams  } from "react-router-dom";
import  { useState, useEffect  } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AdsTop from './component/Contents/ads_top';
function  DetailContent (){
   let {id} =  useParams();
   const [detailData,setDetailData] = useState([]);
    
   
   useEffect(() => {
    const  fetchData = async () =>{
        
        /* Take Menu */
        var configPosts = {
          method: 'GET',
        //url: 'https://panel.studioskandal.com/api/list_menu',
            url: 'https://txmo.studioskandal.com/?mod=view_movie&ipfs_cid='+id
            /*,
          headers: { 
           'authorization': 'Bearer ' + token
          }*/
        };
        console.log(configPosts);
        const resPosts = await axios(configPosts);
        setDetailData(resPosts.data.data);
        
        
    }
    fetchData();
   },[id]);


   const useStyles = makeStyles((theme) => ({
    root: {
      div: {
        'color':'white',
        'font-size':'32px',
        'margin-top':'10px',
      },
    },
    }));

   return (
            <>
            <AdsTop />
            <div style={{'display':'flex','flex-direction': 'row',
    'justify-content': 'center',
    'align-items': 'center',
    'align-content': 'center'}}>
            <Typography className="detail_typo" variant="h2" gutterBottom component="div">
            {detailData.title}
            </Typography>
            </div>
            <div className="detailContent" >
                        
                        <ReactPlayer className="sss" controls="false" url={`https://play.studioskandal.com/ipfs/`+id} />
                        
            </div>
            <AdsDetail />
            </>
    );
}
export default DetailContent; 