import  { useState, useEffect  } from 'react';
import axios from 'axios';
import './RecomendedVideo.css';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import Posts from './Posts';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { useGlobalState} from 'state-pool';
import AdsTop from './ads_top';
import AdsBottom from './ads_bottom';

import {   useParams  } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function RecomendedVideo({title,categoryMain,typeCategoryMain}){
  const classes = useStyles();
  const [postsa,setPosts] = useState([]);
  const [loading,setLoading] = useState(false);
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const [token] = useGlobalState('token');
  const [category,setCategory] = useGlobalState('currentCategory');
  const [typeCategory] = useGlobalState('CurrentTypeCategory');
  const [listCategory] = useGlobalState('ListCategory'); 
  const [currentSearchText] = useGlobalState('CurrentSearchText');
  
  const [currentTitle] = useGlobalState('CurrentTitle');
  const {searchText} = useParams();
  if (category !== categoryMain){
    setCategory(categoryMain);
  }
  else{
    title = currentTitle;
  }



  useEffect(() => { 
      
    
      const getListMoviesApi = async (token) =>{
      var configPosts = {};
      const listCategory1 = listCategory;
      const location = new URL(window.location.href);       
      let page = 1;
      setLoading(true);
      //console.log(typeCategory);
      switch(typeCategory) {
          case 'main':
            // code block
             configPosts = {
              method: 'GET',
              url: 'https://txmo.studioskandal.com/?mod=list_movies_all'
            };
          
             page = new  URLSearchParams(location.hash.replace('#/?','')).get('p');

            if(page === null){
               page = 1;
            }
            //console.log(page);
            setCurrentPage(parseInt(page));
            
            break;
          case 'search':
            // code block
             configPosts = {
              method: 'GET',
              url: 'https://txmo.studioskandal.com/?mod=list_movies_all&title='+currentSearchText
            };
            //console.log(configPosts);
            setCurrentPage(1);
            /*page = new  URLSearchParams(location.hash.replace('#/?','')).get('p');

            if(page === null){
               page = 1;
            }
            console.log(configPosts);
            setCurrentPage(parseInt(page)); */
            break;
          case 'category':
            // code block
             configPosts = {
              method: 'GET',
              url: 'https://txmo.studioskandal.com/?mod=list_movies_all&category='+category
            };
            //console.log('urlpage:'+location);
             page = new  URLSearchParams(location.hash.replace('#/c/'+listCategory[category-1]+'?','')).get('p');

            if(page === null){
               page = 1;
            }
           // console.log(page);
            setCurrentPage(parseInt(page));
            
            break;
            default:
           // console.log('default');

            break;
        }

        /* Take Posts */
        const resPosts = await axios(configPosts);
        setPosts(resPosts.data.data);
        setTimeout(setLoading(false),50000);
      
      }
      getListMoviesApi();
  },[category,typeCategory,token,currentTitle,categoryMain]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postsa.slice(indexOfFirstPost,indexOfLastPost);

  
  if(loading){
    
   
   return (
      
      <div className="recomendedvideo">
        <AdsTop />
        <div className="recomendedvideo__header">
              <h1>
                 <div className="recomendedvideo__Title"> 
                 <VideoLibraryIcon />    <span>{currentTitle}</span>
                 </div>
                 <div className="recomendedvideo__Label"> 
                     <span >ALL VIDEO  </span>
                 </div>
              </h1>
              <hr />
          </div>
       
          <div className="recomendedvideo__body_loading">
          
          
          <div className="words word-1" >
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
          </div>

          <div className="words word-2">
            <span>M</span>
            <span>O</span>
            <span>V</span>
            <span>I</span>
            <span>E</span>
            
          </div>

          </div>
          <AdsBottom />
      </div>
      );
  
  }
  if ( postsa.length <= 0){
    
    return (  
      <div className="recomendedvideo">
          <AdsTop />
          <div className="recomendedvideo__header">
              <h1>
                 <div className="recomendedvideo__Title"> 
                 <VideoLibraryIcon />    <span>{title} {currentSearchText}</span>
                 </div>
                 <div className="recomendedvideo__Label"> 
                     <span >ALL VIDEO  </span>
                 </div>
              </h1>
              <hr />
          </div>
          <div className="recomendedvideo__body_loading">
          
          <span className="loading" >NO DATA</span>

          </div>
          <AdsBottom />
      </div>
      );
  }

 
  
  const handleChange = (event, value) => {
    setCurrentPage(value);
    if (typeCategory=='main'){
      window.location="#/?p="+value;  
    }
    if (typeCategory=='category'){
      window.location="#/c/"+listCategory[category-1]+"?p="+value;
    }
    if (typeCategory=='search'){
      window.location="#/s/?p="+value;
    }
    
  };
  return (
      
    <div className="recomendedvideo">
      <AdsTop />
        <div className="recomendedvideo__header">
            <h1>
               <div className="recomendedvideo__Title"> 
               <VideoLibraryIcon />    <span>{title} {currentSearchText}</span>
               </div>
               <div className="recomendedvideo__Label"> 
                   <span >ALL VIDEO  </span>
               </div>
            </h1>
            <hr />
        </div>
        
        <div className="recomendedvideo__body">
          <Posts postsa={currentPosts} loading={loading} />
        
       
          
        </div>
        <div className="recomendedvideo_paging">
        <div className={classes.root}>
            <Pagination 
            onChange={handleChange} 
            shape="rounded" 
            count={Math.ceil(postsa.length /12)} 
            page={currentPage}
            defaultPage={1} 
            siblingCount={2}
            showFirstButton showLastButton
             boundaryCount={2} color="secondary" />
          </div>
          </div>
        <AdsBottom />
    </div>
    );
}
export default RecomendedVideo;

