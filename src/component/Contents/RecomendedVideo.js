import  { useState, useEffect  } from 'react';
import axios from 'axios';
import './RecomendedVideo.css';

//import _ from "lodash";
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import Posts from './Posts';
//import Pagination from './Pagination';
///import Pagination from "react-js-pagination";
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
//import { PostAdd } from '@material-ui/icons';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function RecomendedVideo({title,category,token}){
  //const [token,setToken] = useState('none');
  const classes = useStyles();
  const [postsa,setPosts] = useState([]);
  const [loading,setLoading] = useState(false);
  //const [nodata,setNodata] = useState(false);
  
  
 
  
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  
  const [typeCategory,setTypeCategory] = useState('main');
  
  
  
 
 
  

  useEffect(() => { 
    console.log(category);
    const getListMoviesApi = async (token) =>{
     
      var configPosts = {};
      if (typeof category == 'undefined'){
         setTypeCategory('main');
      }
      else if ( category === 'search' ){
        setTypeCategory('search');
      }
      else
      { 
        setTypeCategory('category');
      }
     
      setLoading(true);

      switch({typeCategory}.typeCategory) {
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
              url: 'https://txmo.studioskandal.com/?mod=list_movies_all&category='+category,
              headers: { 
                'Authorization': 'Bearer ' + token
              }
            };
            setCurrentPage(1);
            break;
          default:
            // code block
            
             configPosts = {
              method: 'GET',
              url: 'https://txmo.studioskandal.com/?mod=list_movies_all&category='+category,
               headers: { 
                'Authorization': 'Bearer ' + token
              }
            };
            setCurrentPage(1);
        }
        /* Take Posts */
        
        const resPosts = await axios(configPosts);
       
        setPosts(resPosts.data.data);
        setTimeout(setLoading(false),50000);
      }
      getListMoviesApi();
  },[category,typeCategory,postsPerPage]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postsa.slice(indexOfFirstPost,indexOfLastPost);

  //const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if(loading){
    
   // return  "<div className=\"recomendedvideo\"><div className=\"recomendedvideo__header\"><h2>loading</h2></div>";
    
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

  /*
  function handlePageChange(page) {
    console.log('active page is {pageNumber}');
   
    setCurrentPage(page);
  } */
  
  const handleChange = (event, value) => {
    setCurrentPage(value);
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

/*
   <Pagination
          activePage={currentPosts}
          itemsCountPerPage={12}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
<Pagination 
            postsPerPage={postsPerPage}
            totalPosts={postsa.length}
            paginate={paginate}  
            typeCategory={typeCategory} 
                 />
*/