import './App.css';
import './component/Header/Header';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import BodyContent from './component/BodyContent';
import DetailContent from './DetailContent';
import Sidebar from './component/Contents/Sidebar';
import {store, useGlobalState} from 'state-pool';
//import axios from 'axios';
import  {  useEffect  } from 'react';
import {
  
  HashRouter,
  Switch,
  Route,
 
} from "react-router-dom";


store.setState("token", "tokenapp");
store.setState("currentCategory", "");
store.setState("CurrentTypeCategory", "main");
store.setState("CurrentTitle", "LATEST MOVIES");
store.setState("CurrentSearchText", "");
store.setState("CurrentSelectedIndex", 0);
store.setState("ListCategory", 
[
 'asian',
 'barat',
 'jepang',
 'indonesia',
 'hentai',
 'viral'
]
);


function App() {
  const [token] = useGlobalState("token");
  const [currentTypeCategory,setCurrentTypeCategory] = useGlobalState("CurrentTypeCategory");
  const [currentCategory,setCurrentCategory] = useGlobalState("currentCategory");
  const [currentTitle,setCurrentTitle] = useGlobalState("CurrentTitle");
  const [listCategory,setListCategory] = useGlobalState("ListCategory");
  

  // const host = window.location.protocol + "//" + window.location.host;
  const location = new URL(window.location.href);


  if (location.hash.match('#/c/asian') != null){
    //  console.log (location.hash.match('#/c/asian'));
      setCurrentTypeCategory('category');
      setCurrentCategory('1');
      setCurrentTitle('asian');
  }

  if (location.hash.match('#/c/barat') != null){
    //  console.log (location.hash.match('#/c/asian'));
      setCurrentTypeCategory('category');
      setCurrentCategory('2');
      setCurrentTitle('barat');
  }
  
  if (location.hash.match('#/c/barat') != null){
    //console.log (location.hash.match('#/c/asian'));
    setCurrentTypeCategory('category');
    setCurrentCategory('2');
    setCurrentTitle('barat');
  }

  if (location.hash.match('#/c/jepang') != null){
    //console.log (location.hash.match('#/c/jepang'));
    setCurrentTypeCategory('category');
    setCurrentCategory('3');
    setCurrentTitle('jepang');
  }

  if (location.hash.match('#/c/indonesia') != null){
   // console.log (location.hash.match('#/c/indonesia'));
    setCurrentTypeCategory('category');
    setCurrentCategory('4');
    setCurrentTitle('indonesia');
  }
  if (location.hash.match('#/c/hentai') != null){
   // console.log (location.hash.match('#/c/hentai'));
    setCurrentTypeCategory('category');
    setCurrentCategory('5');
    setCurrentTitle('hentai');
  }
  if (location.hash.match('#/c/viral') != null){
    //console.log (location.hash.match('#/c/viral'));
    setCurrentTypeCategory('category');
    setCurrentCategory('6');
    setCurrentTitle('viral');
  }

  if (location.hash.match('#/?search') != null){
    //console.log (location.hash.match('#/?search'));
    setCurrentTypeCategory('search');
    setCurrentTitle('search');
  }


  

  return (
    <div className="app">
      
  
       <HashRouter >
       <Header />    

       <div className="app_page">
            <Switch>
               <Route path="/c/asian">
                      <BodyContent title="Asian"  category="1" typeCategoryMain="category" token={token} />
                </Route>
                <Route path="/c/barat">
                      <BodyContent title="Barat"  category="2" typeCategoryMain="category" token={token} />
                </Route>
                <Route path="/c/jepang">
                    <BodyContent title="Jepang"   category="3" typeCategoryMain="category" token={token} />
                </Route>
                <Route path="/c/indonesia">
                    <BodyContent title="Indonesia" category="4" typeCategoryMain="category" token={token} />
                </Route>
                <Route path="/c/hentai">
                     <BodyContent title="Hentai"   category="5" typeCategoryMain="category" token={token} />
                </Route>
                <Route path="/c/viral">
                    <BodyContent title="Viral"     category="6" typeCategoryMain="category"  token={token} />
                </Route>
                
                
               
                <Route path="/m/:id" >
                    <Sidebar token={token}  />
                    <DetailContent token={token} />
                </Route>
                
                <Route path="/">
                     <BodyContent  title="Latest Movies" category="m" typeCategoryMain="main" token={token} />
                </Route>
            </Switch>
            </div> 
        <Footer/>   
       </HashRouter>
        
     
       
    </div>
  );
}

export default App;
