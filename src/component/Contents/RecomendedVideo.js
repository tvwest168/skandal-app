import  { useState, useEffect  } from 'react';
import axios from 'axios';
import './RecomendedVideo.css';

//import _ from "lodash";
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import Posts from './Posts';
import Pagination from './Pagination';

function RecomendedVideo({title,category,token}){
  //const [token,setToken] = useState('none');
  
  const [postsa,setPosts] = useState([]);
  const [loading,setLoading] = useState(false);
 
  
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage] = useState(24);
  
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
     
      console.log({typeCategory});
     // console.log({})
        setLoading(true);

        switch({typeCategory}.typeCategory) {
          case 'main':
            // code block
             configPosts = {
              method: 'GET',
           //   url: 'https://panel.studioskandal.com/api/list_movies_all?limit=24',
              url: 'https://panel.studioskandal.com/authen.php',
              
              headers: { 
                'Authorization': 'Bearer ' + token,
                'Access-Control-Allow-Origin' : '*',
  'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
              }
            };
            break;
          case 'search':
            // code block
             configPosts = {
              method: 'GET',
              //url: 'https://panel.studioskandal.com/api/list_movies_all?limit=24&category='+category,
              url: 'https://panel.studioskandal.com/authen.php',
              headers: { 
                'Authorization': 'Bearer ' + token,
                'Access-Control-Allow-Origin' : '*',
  'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
              }
            };
            break;
          default:
            // code block
            
             configPosts = {
              method: 'GET',
              url: 'https://panel.studioskandal.com/authen.php',
              
              //url: 'https://panel.studioskandal.com/api/list_movies_all?limit=24&category='+category,
               headers: { 
                'Authorization': 'Bearer ' + token,
                'Access-Control-Allow-Origin' : '*',
  'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
              }
            };
        }
        /* Take Posts */
        
        const resPosts = await axios(configPosts);
        setPosts(resPosts.data.data);
        setLoading(false);
      }
      getListMoviesApi();
  },[category,typeCategory]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postsa.slice(indexOfFirstPost,indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
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
            
          
          <span className="loading">loading . . .</span>
  
          </div>
         
      </div>
      );
  
   }

  

  
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
        


        </div>
        <Pagination 
            postsPerPage={postsPerPage}
            totalPosts={postsa.length}
            paginate={paginate}  
            typeCategory={typeCategory} 
                 />
    </div>
    );
}
export default RecomendedVideo;