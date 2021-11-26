import  { useState, useEffect  } from 'react';
import axios from 'axios';
import './RecomendedVideo.css';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import Posts from './Posts';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { useGlobalState} from 'state-pool';

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

  const [currentSearchText] = useGlobalState('CurrentSearchText');
  
  const [currentTitle] = useGlobalState('CurrentTitle');
  const {searchText} = useParams();
  if (category !== categoryMain){
   // setCategory(categoryMain);
  }
  else{
    title = currentTitle;
  }



  useEffect(() => { 
      
     

      const getListMoviesApi = async (token) =>{
      var configPosts = {};
      setLoading(true);

      switch(typeCategory) {
          case 'main':
            // code block
             configPosts = {
              method: 'GET',
              url: 'https://txmo.studioskandal.com/?mod=list_movies_all',
              
              headers: { 
                'Authorization': 'Bearer ' + token
               
              }
            };
            setCurrentPage(1);
            break;
          case 'search':
            // code block
             configPosts = {
              method: 'GET',
              url: 'https://txmo.studioskandal.com/?mod=list_movies_all&title='+currentSearchText,
              headers: { 
                'Authorization': 'Bearer ' + token
              }
            };
            setCurrentPage(1);
            break;
          case 'category':
            // code block
             configPosts = {
              method: 'GET',
              url: 'https://txmo.studioskandal.com/?mod=list_movies_all&category='+category,
               headers: { 
                'Authorization': 'Bearer ' + token
              }
            };
            setCurrentPage(1);
            
            break;
            default:
            

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
          
         
          <div class="words word-1" >
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
          </div>

          <div class="words word-2">
            <span>M</span>
            <span>O</span>
            <span>V</span>
            <span>I</span>
            <span>E</span>
            
          </div>

          </div>
         
      </div>
      );
  
  }
  if ( postsa.length <= 0){
    
    return (  
      <div className="recomendedvideo">
        
          <div className="recomendedvideo__header">
              <h1>
                 <div className="recomendedvideo__Title"> 
                 <VideoLibraryIcon />    <span>{title}</span>
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
         
      </div>
      );
  }

 
  
  const handleChange = (event, value) => {
    setCurrentPage(value);
    //window.location="#/c/asian/"+value;
  };
  return (
      
    <div className="recomendedvideo">
      
        <div className="recomendedvideo__header">
            <h1>
               <div className="recomendedvideo__Title"> 
               <VideoLibraryIcon />    <span>{title}</span>
               </div>
               <div className="recomendedvideo__Label"> 
                   <span >ALL VIDEO  </span>
               </div>
            </h1>
            <hr />
        </div>
        <div className="recomendedvideo__body">
          <Posts postsa={currentPosts} loading={loading} />
        
       
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
        
        
    </div>
    );
}
export default RecomendedVideo;

